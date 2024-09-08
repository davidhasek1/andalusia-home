'use client';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { PropertiesFilterInput } from '../gql/graphql';

export type Filters = PropertiesFilterInput;

export type FilterContext = {
	filters: Filters;
	setFilters: Dispatch<SetStateAction<Filters>>;
};

const initialState = {
	minPrice: 0,
	maxPrice: 0,
	bedsCount: 0,
	bathsCount: 0,
	location: [],
	propertyType: [],
};

const FiltersContext = createContext({ filters: initialState, setFilters: () => {} } as FilterContext);

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState<Filters>(initialState);

	useEffect(() => {
		//TODO: Set here filter to some local storage
	}, [filters]);
	return <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>;
};
