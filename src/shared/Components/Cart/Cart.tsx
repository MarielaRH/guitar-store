import "./Cart.css";

import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";

import { DataView } from "primereact/dataview";
import { useCart } from "../../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart: guitars, totalCart } = useCart();

	const overlayRef = useRef<OverlayPanel>(null);
	return (
		<>
			<Button
				aria-label="Shopping Cart"
				icon="pi pi-shopping-cart"
				onClick={(e) => overlayRef.current?.toggle(e)}
				rounded
				text
				type="button"
			/>

			<OverlayPanel
				ref={overlayRef}
				showCloseIcon={false}
				closeOnEscape={true}
				className="overlay-panel">
				<section className="cart-container">
					{guitars.length > 0 ? (
						<DataView
							className="cart-dataview"
							value={guitars}
							listTemplate={(guitars) => {
								return (
									<div className="cart-dataview-container">
										{guitars.map((guitar, index) => (
											<CartItem
												key={guitar.id}
												guitar={guitar}
												index={index}
											/>
										))}
									</div>
								);
							}}
						/>
					) : (
						<div className="cart-empty-container">
							<i
								className="pi pi-shopping-bag"
								style={{ fontSize: "2rem" }}></i>
							<p>No items in cart</p>
						</div>
					)}

					<div className="cart-total-container">
						<p>Total</p>
						<p>{totalCart.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
					</div>

					{guitars.length > 0 && (
						<Button
							label="Pay now"
							style={{ width: "100%" }}></Button>
					)}
				</section>
			</OverlayPanel>
		</>
	);
};

export default Cart;
