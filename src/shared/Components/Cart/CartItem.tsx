import "./Cart.css";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { CartItem } from "../../interfaces/interfaces";
import { useCart } from "../../../contexts/CartContext";
import { useToast } from "../../../contexts/ToastContext";

const CartItem = ({ guitar, index }: { guitar: CartItem; index: number }) => {
	const { removeFromCart, updateQuantity } = useCart();
	const { showMessage } = useToast();

	const removeItemFromCart = (guitar: CartItem) => {
		removeFromCart(guitar);
		showMessage("success", "", `${guitar.title} removed from cart`);
	};
	return (
		<div
			className="cart-item-container"
			key={guitar.id}>
			<img
				className="cart-item-image"
				width={70}
				height={100}
				src={guitar.image}
				alt={guitar.title}
			/>
			<div className="cart-item-info">
				<p className="title cart-item-title">
					{guitar.title}
					<br />
					<span className="subtitle">{guitar.subtitle}</span>
				</p>

				<span style={{ fontSize: "1.5rem", fontWeight: "normal" }}>
					<span
						className="price-symbol"
						aria-hidden="true">
						$
					</span>
					<span aria-label={`Price ${guitar.price} dollars`}>{guitar.price.toFixed(2)}</span>
				</span>
			</div>
			<div className="cart-item-actions">
				<Button
					style={{ justifySelf: "end", flexShrink: 0 }}
					icon="pi pi-trash"
					text
					className="p-button-rounded"
					severity="danger"
					onClick={() => removeItemFromCart(guitar)}></Button>
				<Dropdown
					value={guitar.quantity}
					onChange={(e) => updateQuantity(guitar, e.value)}
					options={[1, 2, 3, 4, 5]}
					optionLabel="name"
					placeholder="Select a City"
					style={{ width: "5.5rem" }}
				/>
			</div>
		</div>
	);
};

export default CartItem;
