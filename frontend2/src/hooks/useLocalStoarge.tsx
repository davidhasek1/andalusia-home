import { useEffect, useState } from 'react';

//Optional idKey for picking id from object ie property to remove item
export const useLocalStorage = <TData,>(key: string, idKey?: keyof TData) => {
	const [value, setValue] = useState<TData[]>([]);

	useEffect(() => {
		const valFromStorage = localStorage.getItem(key);

		if (valFromStorage != null) {
			setValue(JSON.parse(valFromStorage));
		}
	}, [key]);

	//TODO: do some chceks if it is array value and for simplier values create separated function for set
	const setLocalStorage = (value: TData | TData[]) => {
		const formattedValue = [value];
		const valFromStorage = localStorage.getItem(key);
		if (localStorage.getItem(key) == null) {
			localStorage.setItem(key, JSON.stringify(formattedValue));
			setValue(JSON.parse(localStorage.getItem(key) ?? ''));
			return;
		}
		const parsedValue = JSON.parse(valFromStorage ?? '');

		if (Array.isArray(parsedValue) && Array.isArray(formattedValue)) {
			const updatedValue = [...parsedValue, ...formattedValue];
			localStorage.setItem(key, JSON.stringify(updatedValue));
			setValue(updatedValue);
			return;
		}
	};

	const removeFromLocalStorage = (itemID: TData extends object ? TData[keyof TData] : never) => {
		const valFromStorage = localStorage.getItem(key);
		if (valFromStorage == null) {
			return;
		}

		const parsedValues = JSON.parse(valFromStorage) as TData[];
		const updatedValue = (idKey && parsedValues.filter((item) => item[idKey] !== itemID)) ?? [];
		localStorage.setItem(key, JSON.stringify(updatedValue));
		setValue(updatedValue);
		return;
	};

	return { value, setLocalStorage, removeFromLocalStorage };
};
