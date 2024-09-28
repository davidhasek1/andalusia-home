'use client';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { PropertiesFilterInput } from '../gql/graphql';

export type Filters = PropertiesFilterInput;

export type FilterContext = {
	filters: Filters;
	setFilters: Dispatch<SetStateAction<Filters>>;
	appliedFilters: Filters;
	handleApplyFilters: () => void;
};

const initialState = {
	minPrice: 0,
	maxPrice: 0,
	bedsCount: 0,
	bathsCount: 0,
	location: [],
	propertyType: [],
};

const FiltersContext = createContext({
	filters: initialState,
	setFilters: () => {},
	appliedFilters: initialState,
	handleApplyFilters: () => {},
} as FilterContext);

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState<Filters>(initialState);
	const [appliedFilters, setAppliedFilters] = useState<Filters>({});

	const handleApplyFilters = () => {
		setAppliedFilters(filters);
	};

	/* 	useEffect(() => {
		//TODO: Set here filter to some local storage
	}, [filters]); */

	return <FiltersContext.Provider value={{ filters, setFilters, appliedFilters, handleApplyFilters }}>{children}</FiltersContext.Provider>;
};
