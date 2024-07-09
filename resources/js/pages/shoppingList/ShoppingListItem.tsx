import classNames from 'classnames';
import { ShoppingListitem } from '../../models/shoppingListItem';
import DirectionButtons from '../../common/directionButtons/DirectionButtons';
import { Direction } from '../../common';

interface ShoppingListItemProps {
	shoppingListItem: ShoppingListitem;
	onDeleteItem: (id: string | number) => void;
	onCompleteItem: (id: string | number) => void;
	onChangePosition: (id: string | number, direction: Direction) => void;
	index: number;
}

function ShoppingListItem({
	shoppingListItem,
	index,
	onDeleteItem,
	onCompleteItem,
	onChangePosition,
}: ShoppingListItemProps) {
	const normalisedIndex = index + 1;

	const handleCompleteItem = () => {
		onCompleteItem(shoppingListItem.id);
	};

	const handleDeleteItem = () => {
		onDeleteItem(shoppingListItem.id);
	};

	const handleChangePosition = (direction: Direction) => () =>
		onChangePosition(shoppingListItem.id, direction);

	return (
		<tr className="bg-gray-200">
			<td className="p-2 items-center flex justify-between">
				<div>{normalisedIndex}</div>
				<DirectionButtons
					onDownClick={handleChangePosition(Direction.down)}
					onUpClick={handleChangePosition(Direction.up)}
				/>
			</td>
			<td
				className={classNames('p-2', {
					'line-through': shoppingListItem.isCollected,
				})}
			>{`£${shoppingListItem.price}`}</td>
			<td
				className={classNames('p-2', {
					'line-through': shoppingListItem.isCollected,
				})}
			>
				{shoppingListItem.name}
			</td>
			<td className="p-2 text-center">
				<input
					type="checkbox"
					className="cursor-pointer"
					checked={shoppingListItem.isCollected}
					onChange={handleCompleteItem}
				/>
			</td>
			<td
				className="p-2 text-center cursor-pointer hover:bg-red-200"
				onClick={handleDeleteItem}
			>
				<div>🗑️</div>
			</td>
		</tr>
	);
}

export default ShoppingListItem;
