import { describe, expect, it } from 'vitest';
import { movePositionInArray } from '../movePositionInArray';
import { Direction } from '../../common';

describe('movePositionInArray', () => {
	it('should return the original array when the array is invalid or the elementIndex is invalid', () => {
		const INVALID_ARRAY: unknown[] = [];

		expect(movePositionInArray(INVALID_ARRAY, 1, Direction.up)).toStrictEqual(
			[]
		);
	});

	it('should return the original array if the index is higher or lower than the bounds of the array.', () => {
		const INVALID_LOW_INDEX = -2;
		const INVALID_HIGH_INDEX = 10;
		expect(
			movePositionInArray([1, 2, 3], INVALID_LOW_INDEX, Direction.up)
		).toStrictEqual([1, 2, 3]);
		expect(
			movePositionInArray([1, 2, 3], INVALID_HIGH_INDEX, Direction.up)
		).toStrictEqual([1, 2, 3]);
	});

	it('should return the original array if the last or first item is attempted to be pushed past the bounds', () => {
		expect(movePositionInArray([1, 2, 3], 0, Direction.up)).toStrictEqual([
			1, 2, 3,
		]);
		expect(movePositionInArray([1, 2, 3], 2, Direction.down)).toStrictEqual([
			1, 2, 3,
		]);
	});

	it('should be able to increment an items position', () => {
		expect(movePositionInArray([1, 2, 3], 2, Direction.up)).toStrictEqual([
			1, 3, 2,
		]);
	});

	it('should be able to decrement an items position', () => {
		expect(movePositionInArray([1, 2, 3], 0, Direction.down)).toStrictEqual([
			2, 1, 3,
		]);
	});
});

describe('incrementPosition', () => {
	it('Should be able to increment an items position', () => {
		expect(movePositionInArray([1, 2, 3], 2, Direction.up)).toStrictEqual([
			1, 3, 2,
		]);
	});
});

describe('decrementPosition', () => {
	it('Should be able to increment an items position', () => {
		expect(movePositionInArray([1, 2, 3], 0, Direction.down)).toStrictEqual([
			2, 1, 3,
		]);
	});
});
