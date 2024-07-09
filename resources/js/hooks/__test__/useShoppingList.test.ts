import { describe, it, expect, beforeEach, vitest } from 'vitest';
import { renderHook } from '@testing-library/react';
import useShoppingList from '../useShoppingList';
import { ShoppingList } from '../../models/shoppingList';

describe('useShoppingList', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should return an empty shopping list when there was nothing in the store.', () => {
		const { result } = renderHook(useShoppingList);

		expect(result.current.shoppingList).toEqual([]);
	});

	it('should return the stored list when the component mounts', () => {
		localStorage.setItem(
			'shoppingList',
			JSON.stringify([
				{ name: 'avc', price: 123, id: 1, isCollected: false },
			] as ShoppingList)
		);
		const { result } = renderHook(useShoppingList);

		expect(result.current.shoppingList).toEqual([
			{ name: 'avc', price: 123, id: 1, isCollected: false },
		]);
	});

	it('should return a function that can be used to save a shopping list', () => {
		const { result } = renderHook(useShoppingList);

		expect(result.current.shoppingList).toStrictEqual([]);

		result.current.updateShoppingList((currentList) => [
			...currentList,
			{ name: 'avc', price: 123, id: 1, isCollected: false },
		]);

		const { result: result2 } = renderHook(useShoppingList);

		expect(result2.current.shoppingList).toStrictEqual([
			{ name: 'avc', price: 123, id: 1, isCollected: false },
		]);
	});
});
