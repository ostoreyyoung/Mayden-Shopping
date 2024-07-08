import classNames from 'classnames';
import { ShoppingListitem } from '../../models/shoppingListItem';

interface ShoppingListItemProps {
	shoppingListItem: ShoppingListitem;
	onDeleteItem: (id: string | number) => void;
	onCompleteItem: (id: string | number) => void;
	onChangePosition: (id: string | number, direction: 'up' | 'down') => void;
	index: number;
}

function ShoppingListItem({
	shoppingListItem,
	index,
	onDeleteItem,
	onCompleteItem,
	onChangePosition,
}: ShoppingListItemProps) {
	const handleCompleteItem = () => {
		onCompleteItem(shoppingListItem.id);
	};

	const handleDeleteItem = () => {
		onDeleteItem(shoppingListItem.id);
	};

	const handleChangePosition = (direction: 'up' | 'down') => () =>
		onChangePosition(shoppingListItem.id, direction);

	return (
		<tr className="bg-gray-200">
			<td className="p-2 items-center flex justify-between">
				<div>{index + 1}</div>
				<div>
					<div
						className="cursor-pointer hover:text-green-700"
						onClick={handleChangePosition('up')}
					>
						▲
					</div>
					<div
						className="cursor-pointer hover:text-red-700"
						onClick={handleChangePosition('down')}
					>
						▼
					</div>
				</div>
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
