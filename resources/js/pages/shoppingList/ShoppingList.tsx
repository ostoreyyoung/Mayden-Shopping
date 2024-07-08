import { useState } from 'react';
import { ShoppingListitem } from 'resources/js/models/shoppingListItem';
import ShoppingListItem from './ShoppingListItem';
import AddNewItem from './AddNewItem';

function ShoppingList() {
	const [shoppingList, setShoppingList] = useState<ShoppingListitem[]>([]);

	const listTotalPrice = shoppingList.reduce<number>((result, item) => {
		return Number(item.price + result);
	}, 0);

	const handleAddNewItem = (newItem: ShoppingListitem) =>
		setShoppingList((prevList) => [...prevList, newItem]);

	const handleDeleteItem = (id: string | number) =>
		setShoppingList((prevList) =>
			prevList.filter((listItem) => listItem.id !== id)
		);

	const handleSetItemCompleted = (id: string | number) =>
		setShoppingList((prevList) => {
			const oldItemIndex = prevList.findIndex((item) => item.id === id);

			if (oldItemIndex === -1) {
				return prevList;
			}

			const newItems = [...prevList];
			newItems[oldItemIndex].isCollected = !newItems[oldItemIndex].isCollected;

			return newItems;
		});

	return (
		<div className="p-10 border rounded shadow w-full h-full flex min-h-0 flex-col gap-y-4">
			<h1 className="m-0">Shopping List</h1>
			<AddNewItem onAddNewItem={handleAddNewItem} />
			<div>Total: £{listTotalPrice}</div>
			<table>
				<thead className="table-auto">
					<th className="p-2 w-10 text-left">#</th>
					<th className="p-2 w-40 text-left">Price</th>
					<th className="p-2 text-left">Name</th>
					<th className="p-2 w-28">Collected</th>
					<th className="p-2 w-28">Delete</th>
				</thead>
				<tbody>
					{shoppingList.map((shoppingListItem, index) => (
						<ShoppingListItem
							onDeleteItem={handleDeleteItem}
							onCompleteItem={handleSetItemCompleted}
							key={shoppingListItem.id}
							shoppingListItem={shoppingListItem}
							index={index}
						/>
					))}
				</tbody>
			</table>
			{!shoppingList.length && (
				<div className="w-full text-center italic text-lg">
					There are currently no items on the shopping list.
				</div>
			)}
		</div>
	);
}

export default ShoppingList;
