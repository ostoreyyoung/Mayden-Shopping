import { ShoppingListitem } from '../../models/shoppingListItem';
import ShoppingListItem from './ShoppingListItem';
import AddNewItem from './AddNewItem';
import {
	DecrementPosition,
	IncrementPosition,
} from '../../utils/movePositionInArray';
import useShoppingList from '../../hooks/useShoppingList';
import { Direction } from '../../../js/common';

function ShoppingList() {
	const { updateShoppingList, shoppingList } = useShoppingList();

	const listTotalPrice = shoppingList.reduce<number>((result, item) => {
		return Number(item.price + result);
	}, 0);

	const handleAddNewItem = (newItem: ShoppingListitem) =>
		updateShoppingList((prevList) => [...prevList, newItem]);

	const handleDeleteItem = (id: string | number) =>
		updateShoppingList((prevList) =>
			prevList.filter((listItem) => listItem.id !== id)
		);

	const handleSetItemCompleted = (id: string | number) =>
		updateShoppingList((prevList) => {
			const oldItemIndex = prevList.findIndex((item) => item.id === id);

			if (oldItemIndex === -1) {
				return prevList;
			}

			const newItems = [...prevList];
			newItems[oldItemIndex].isCollected = !newItems[oldItemIndex].isCollected;

			return newItems;
		});

	const handleSetItemPosition = (id: string | number, direction: Direction) => {
		updateShoppingList((prevList) => {
			const oldItemIndex = prevList.findIndex((item) => item.id === id);

			if (oldItemIndex === -1) {
				return prevList;
			}

			const directionFunction =
				direction === Direction.up ? IncrementPosition : DecrementPosition;

			return directionFunction(prevList, oldItemIndex);
		});
	};

	return (
		<div className="border rounded shadow w-full h-full flex min-h-0 flex-col gap-y-4">
			<div className="p-4 h-full flex flex-col min-h-0">
				<div className="flex flex-col gap-y-4">
					<h1 className="m-0">Shopping List</h1>
					<AddNewItem onAddNewItem={handleAddNewItem} />
					<div className="mb-2 font-bold">Total: £{listTotalPrice}</div>
				</div>
				<div className="w-full min-h-0 overflow-y-scroll">
					<table className="w-full">
						<thead className="table-auto">
							<tr>
								<th className="p-2 w-10 text-left">#</th>
								<th className="p-2 w-40 text-left">Price</th>
								<th className="p-2 text-left">Name</th>
								<th className="p-2 w-28">Collected</th>
								<th className="p-2 w-28">Delete</th>
							</tr>
						</thead>
						<tbody>
							{shoppingList.map((shoppingListItem, index) => (
								<ShoppingListItem
									onDeleteItem={handleDeleteItem}
									onCompleteItem={handleSetItemCompleted}
									onChangePosition={handleSetItemPosition}
									key={shoppingListItem.id}
									shoppingListItem={shoppingListItem}
									index={index}
								/>
							))}
						</tbody>
					</table>
				</div>
				{!shoppingList.length && (
					<div className="w-full text-center italic text-lg">
						There are currently no items on the shopping list.
					</div>
				)}
			</div>
		</div>
	);
}

export default ShoppingList;
