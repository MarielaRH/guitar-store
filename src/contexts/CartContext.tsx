import { createContext, useContext, useState } from "react";
import { CartItem, Guitar } from "../shared/interfaces/interfaces";

interface CartContextType {
	cart: CartItem[];
	totalCart: number;
	addToCart: (guitar: Guitar, quantity: number) => void;
	removeFromCart: (guitar: CartItem) => void;
	updateQuantity: (guitar: CartItem, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
	cart: [],
	totalCart: 0,
	addToCart: () => {},
	removeFromCart: () => {},
	updateQuantity: () => {},
});

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	// Get total amount
	const totalCart = cart.reduce(
		(accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity,
		0,
	);

	// Add new item to cart
	const addToCart = (guitar: Guitar, quantity: number) => {
		const existingItem = cart.find((item) => item.id === guitar.id);
		if (existingItem) {
			const newQuantity = existingItem.quantity + quantity;
			updateQuantity(existingItem, newQuantity > 4 ? 4 : newQuantity);
			return;
		} else {
			setCart([...cart, { ...guitar, quantity }]);
		}
	};

	// Remove item from cart
	const removeFromCart = (guitar: CartItem) => {
		const newCart = cart.filter((item) => item.itemId !== guitar.itemId);
		setCart(newCart);
	};

	const updateQuantity = (guitar: CartItem, quantity: number) => {
		const itemIndex = cart.findIndex((item) => item.itemId === guitar.itemId);

		if (itemIndex !== -1) {
			const updatedCart = [...cart];
			updatedCart[itemIndex].quantity = quantity;
			setCart(updatedCart);
		}
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCart, updateQuantity }}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to manage cart
export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used within a CartContextProvider");
	}

	return context;
};
