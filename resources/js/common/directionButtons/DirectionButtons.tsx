interface DirectionButtonsProps {
	onUpClick: () => void;
	onDownClick: () => void;
}

function DirectionButtons({ onUpClick, onDownClick }: DirectionButtonsProps) {
	return (
		<div>
			<div
				className="cursor-pointer hover:text-green-700"
				data-testid="DirectionButtons::UpArrow"
				onClick={onUpClick}
			>
				▲
			</div>
			<div
				className="cursor-pointer hover:text-red-700"
				data-testid="DirectionButtons::DownArrow"
				onClick={onDownClick}
			>
				▼
			</div>
		</div>
	);
}

export default DirectionButtons;
