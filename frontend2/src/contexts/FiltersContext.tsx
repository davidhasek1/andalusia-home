'use client';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

type Context = {
	filters: { bedsCount: number; bathsCount: number };
	setFilters: Dispatch<SetStateAction<{ bedsCount: number; bathsCount: number }>>;
};

const FiltersContext = createContext({ filters: { bedsCount: 1, bathsCount: 1 }, setFilters: () => {} } as Context);

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState({ bedsCount: 1, bathsCount: 1 });

	useEffect(() => {
		//TODO: Set here filter to some local storage
		console.log('Filters chnaged context UE', filters);
	}, [filters]);
	return <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>;
};
