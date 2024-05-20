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

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params;
		},
		[searchParams],
	);

	return { createQueryString };
};
