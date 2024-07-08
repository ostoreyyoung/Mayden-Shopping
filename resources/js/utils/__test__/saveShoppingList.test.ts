import { describe, expect, it, vitest } from 'vitest';
import { saveShoppingList } from '../saveShoppingList';
import { ShoppingList } from 'resources/js/models/shoppingList';

describe('saveShoppingList', () => {
	// This test is currently only passing as localstorage is not mocked for node.
	// So we cant write anymore (and this is useless kinda) until I get round to mocking
	it('should throw a console error if it is unable to save to the local storage.', () => {
		const consoleSpy = vitest.spyOn(console, 'warn');
		saveShoppingList(undefined as unknown as ShoppingList);

		expect(consoleSpy).toHaveBeenCalledWith('Unable to save shopping list.');
	});
});
