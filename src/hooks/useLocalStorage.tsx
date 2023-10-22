'use client';

//* LIB
import { useEffect, useState } from 'react';

const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T | ((prop: T) => T)) => void, () => void] => {
	const [storedValue, setStoredValue] = useState<T>(initialValue);

	useEffect(() => {
		const item = window.localStorage.getItem(key);
		if (item) {
			setStoredValue(JSON.parse(item) as T);
		}
	}, []);

	const setValue = (value: T | ((prop: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;

			setStoredValue(valueToStore);
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.error(error);
		}
	};

	const clearStorage = () => {
		try {
			setStoredValue(initialValue);
			if (typeof window !== 'undefined') {
				window.localStorage.removeItem(key);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue, clearStorage];
};

export default useLocalStorage;
