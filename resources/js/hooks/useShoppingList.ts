import { useEffect, useState } from 'react';
import { ShoppingList } from '../models/shoppingList';
import { fetchShoppingList, saveShoppingList } from '../utils/saveShoppingList';

interface UseShoppingListReturn {
	shoppingList: ShoppingList;
	updateShoppingList: (
		callback: (previousShoppingList: ShoppingList) => ShoppingList
	) => void;
}

function useShoppingList(): UseShoppingListReturn {
	const [shoppingList, setShoppingList] = useState<ShoppingList>([]);

	const updateShoppingList = (
		callback: (previousShoppingList: ShoppingList) => ShoppingList
	) => {
		const newList = callback(shoppingList);

		setShoppingList(newList);
		saveShoppingList(newList);
	};

	useEffect(() => {
		const savedShoppingList = fetchShoppingList();
		if (savedShoppingList) {
			setShoppingList(savedShoppingList);
		}
	}, []);

	return { updateShoppingList, shoppingList };
}

export default useShoppingList;
