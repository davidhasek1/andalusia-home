'use client';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

export type Filters = {
	bedsCount: number;
	bathsCount: number;
};

export type FilterContext = {
	filters: Filters;
	setFilters: Dispatch<SetStateAction<Filters>>;
};

const FiltersContext = createContext({ filters: { bedsCount: 1, bathsCount: 1 }, setFilters: () => {} } as FilterContext);

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState<Filters>({ bedsCount: 1, bathsCount: 1 });

	useEffect(() => {
		//TODO: Set here filter to some local storage
		console.log('Filters chnaged context UE', filters);
	}, [filters]);
	return <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>;
};
