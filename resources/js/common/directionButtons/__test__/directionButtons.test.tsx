import { describe, it, expect, vitest, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import DirectionButtons from '../DirectionButtons';

describe('directionButtons', () => {
	afterEach(() => {
		cleanup();
	});

	it('should call the up function when the up button is clicked', async () => {
		const upFunction = vitest.fn(() => null);
		const downFunction = vitest.fn(() => null);

		const component = render(
			<DirectionButtons onDownClick={downFunction} onUpClick={upFunction} />
		);

		const upArrow = await component.findByTestId('DirectionButtons::UpArrow');
		upArrow.click();
		expect(upFunction).toHaveBeenCalledOnce();
		expect(downFunction).not.toHaveBeenCalled();

		const downArrow = await component.findByTestId(
			'DirectionButtons::DownArrow'
		);
		downArrow.click();
		expect(upFunction).toHaveBeenCalledOnce();
		expect(downFunction).toHaveBeenCalledOnce();
	});

	it('should render an up and down arrow', async () => {
		const upFunction = vitest.fn(() => null);
		const downFunction = vitest.fn(() => null);

		const component = render(
			<DirectionButtons onDownClick={downFunction} onUpClick={upFunction} />
		);
		const upArrow = await component.findByTestId('DirectionButtons::UpArrow');
		expect(upArrow.innerHTML).toEqual('▲');

		const downArrow = await component.findByTestId(
			'DirectionButtons::DownArrow'
		);
		expect(downArrow.innerHTML).toEqual('▼');
	});
});
