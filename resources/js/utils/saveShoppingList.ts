import { ShoppingList } from '../models/shoppingList';

const SHOPPING_LIST_KEY = 'shoppingList';

export function saveShoppingList(shoppingListToSave: ShoppingList): void {
	try {
		const valueTosave = JSON.stringify(shoppingListToSave);
		if (!valueTosave) {
			throw new Error('Item could not be saved.');
		}
		localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(shoppingListToSave));
	} catch (e: unknown) {
		console.warn('Unable to save shopping list.');
	}
}

export function fetchShoppingList(): ShoppingList | undefined {
	const savedShoppingList = localStorage.getItem(SHOPPING_LIST_KEY);
	if (savedShoppingList) {
		try {
			return JSON.parse(savedShoppingList) as ShoppingList;
		} catch (e: unknown) {
			console.warn('Unable to parse saved shopping list.');
		}
	}
}
