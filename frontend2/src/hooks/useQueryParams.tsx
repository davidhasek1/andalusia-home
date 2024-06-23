import { useSearchParams } from 'next/navigation';
import qs from 'qs';
import { useCallback, useEffect } from 'react';
import { Filters, useFilters } from '../contexts/FiltersContext';

export const useQueryParams = () => {
	const searchParams = useSearchParams();
	const { setFilters } = useFilters();

	useEffect(() => {
		const parsedQuery = qs.parse(searchParams.toString());
		const convertedQuery = Object.fromEntries(
			Object.entries(parsedQuery).map(([key, value]) => [key, !isNaN(value as any) ? Number(value) : value]),
		);
		setFilters(convertedQuery as Filters);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const createOrDeleteQueryParams = useCallback(
		(name: string, value: string | null | undefined) => {
			const params = new URLSearchParams(searchParams.toString());

			if (value == null || value.length === 0) {
				params.delete(name);
				return params;
			}
			if (value != null) {
				params.set(name, value);
				return params;
			}

			return params;
		},
		[searchParams],
	);

	//Leaving it here for now
	// If it has not any usage delete it
	const removeQueryParam = (name: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete(name);
		return params;
	};

	return { createOrDeleteQueryParams, removeQueryParam };
};
