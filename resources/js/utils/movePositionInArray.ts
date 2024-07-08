export function movePositionInArray<T>(
	array: Array<T>,
	elementIndex: number,
	direction: 'up' | 'down'
): Array<T> {
	// Exit early for empty array or index issues.
	if (!array.length || elementIndex < 0 || elementIndex > array.length - 1) {
		return array;
	}

	// Exit early when trying to move an item at either end, further out.
	if (
		(elementIndex === array.length - 1 && direction === 'down') ||
		(elementIndex === 0 && direction === 'up')
	) {
		return array;
	}

	// Lets duplicate the array
	const newArray = [...array];

	// Lets get the element we want to move
	const element = newArray[elementIndex];

	// Exit if element not found.
	if (!element) {
		return array;
	}

	// Remove the element from the array
	newArray.splice(elementIndex, 1);

	const newIndex = direction === 'up' ? elementIndex - 1 : elementIndex + 1;

	// Insert it at the new position.
	newArray.splice(newIndex, 0, element);

	return newArray;
}

// Wrapper for incrementing
export function IncrementPosition<T>(
	array: Array<T>,
	elementIndex: number
): Array<T> {
	return movePositionInArray(array, elementIndex, 'up');
}

// Wrapper for decrementing
export function DecrementPosition<T>(
	array: Array<T>,
	elementIndex: number
): Array<T> {
	return movePositionInArray(array, elementIndex, 'down');
}
