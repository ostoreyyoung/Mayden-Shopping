const DECIMAL_REGEX = /^\d+(\.\d{1,2})?$/;

export function isValidPrice(price: string) {
	return price.match(DECIMAL_REGEX);
}
