import { describe, expect, it } from 'vitest';
import { isValidPrice } from '../validation';

describe('isValidPrice', () => {
	it('should match valid decimals / integers with zero to two decimal places', () => {
		const validDecimals = ['1', '1.0', '11.1', '11.11'];
		validDecimals.forEach((decimal) => {
			expect(isValidPrice(decimal)).toBeTruthy();
		});
	});

	it('should not match decimals with more than two decimal places', () => {
		const invalidDecimals = ['1.234', '0.0001'];
		invalidDecimals.forEach((decimal) => {
			expect(isValidPrice(decimal)).toBeFalsy();
		});
	});

	it('should not match non-decimal numbers', () => {
		const nonDecimals = ['-1.2', '1.', '.2', '++123.3'];
		nonDecimals.forEach((nonDecimal) => {
			expect(isValidPrice(nonDecimal)).toBeFalsy();
		});
	});
});
