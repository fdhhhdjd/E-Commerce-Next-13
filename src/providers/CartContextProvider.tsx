'use client';

//* LIB
import React from 'react';

//* IMPORT
import { cartsSchema } from '@/src/helpers/validations/cartItemSchema';
import useLocalStorage from '@/src/hooks/useLocalStorage';
import { CartItem } from '@/src/types/types';

interface CartContextValues {
	cartItems: CartItem[];
	setCartItems: (cartItems: CartItem[]) => void;
}
export const CartContext = React.createContext<CartContextValues>({
	cartItems: [],
	setCartItems: () => {},
});

export const useCartContext = () => React.useContext(CartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('carts', []);

	const parsedCartItems = (cartItems: CartItem[]) => {
		try {
			return cartsSchema.parse(cartItems);
		} catch (_) {
			setCartItems([]);
			return [];
		}
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: parsedCartItems(cartItems),
				setCartItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
