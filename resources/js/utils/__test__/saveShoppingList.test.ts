import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { saveShoppingList } from '../saveShoppingList';
import { ShoppingList } from 'resources/js/models/shoppingList';

describe('saveShoppingList', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should throw a console error if it is unable to save to the local storage.', () => {
		const consoleSpy = vitest.spyOn(console, 'warn');
		const INVALID_SAVE_ITEM = () => 'a';
		saveShoppingList(INVALID_SAVE_ITEM as unknown as ShoppingList);

		expect(consoleSpy).toHaveBeenCalledWith('Unable to save shopping list.');
	});

	it('should be able to save a valid value.', () => {
		const consoleSpy = vitest.spyOn(console, 'warn');
		saveShoppingList([{ name: 'a', price: 22, isCollected: false, id: '11' }]);

		expect(consoleSpy).not.toHaveBeenCalled();
		expect(localStorage.getItem('shoppingList')).toStrictEqual(
			JSON.stringify([{ name: 'a', price: 22, isCollected: false, id: '11' }])
		);
	});
});
