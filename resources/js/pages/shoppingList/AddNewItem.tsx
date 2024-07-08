import { ChangeEvent, useState } from 'react';
import { ShoppingListitem } from '../../models/shoppingListItem';
import { v4 as uuidv4 } from 'uuid';
import { isValidPrice } from '../../utils/validation';

interface AddNewItemProps {
	onAddNewItem: (newItem: ShoppingListitem) => void;
}

function AddNewItem({ onAddNewItem }: AddNewItemProps) {
	const [formFields, setFormFields] = useState<
		Pick<ShoppingListitem, 'name' | 'price'>
	>({ name: '', price: 0 });

	const isPriceValidated = isValidPrice(String(formFields.price));
	const isNameValidated = formFields.name.length >= 1;

	const isValidForm = isPriceValidated && isNameValidated;

	const handleFormInputChange =
		(key: keyof typeof formFields) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			const newValue = event.target.value;

			setFormFields((prevFields) => ({ ...prevFields, [key]: newValue }));
		};

	const handleSubmit = () => {
		onAddNewItem({
			name: formFields.name,
			price: Number(formFields.price),
			id: uuidv4(),
			isCollected: false,
		});

		setFormFields({ name: '', price: 0 });
	};

	return (
		<div className="border-b-2 border-green-200">
			<div className="flex gap-x-4">
				<div>
					<span>Item Name: </span>
					<input
						value={formFields.name}
						onChange={handleFormInputChange('name')}
					/>
				</div>
				<div>
					<span>Item Price: </span>
					<input
						type="number"
						inputMode="decimal"
						value={formFields.price}
						onChange={handleFormInputChange('price')}
					/>
				</div>
				<button disabled={!isValidForm} onClick={handleSubmit}>
					Add Item
				</button>
			</div>

			{!isNameValidated && (
				<div className="text-red-500">Please enter a valid Name</div>
			)}
			{!isPriceValidated && (
				<div className="text-red-500">Please enter a valid price</div>
			)}
		</div>
	);
}

export default AddNewItem;
