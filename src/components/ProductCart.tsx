'use client';

//* LIB
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoIosAddCircle } from 'react-icons/io';

//* IMPORT
import Button from './buttons/Button';
import cn from '../helpers/cn';
import { convertArrayStrings } from '../helpers/strings';
import { useCartContext } from '../providers/CartContextProvider';

import { FullProductClient } from '@/src/types/types';
import { DEFAULT_SIZES, LIMIT_CART_SIZE } from '@/src/utils/constants';

interface ProductCartProps {
	product: FullProductClient;
}

const ProductCart = ({ product }: ProductCartProps) => {
	const { id, name, image, sizes, quantity } = product;

	const [size, setSize] = useState<string | undefined>();

	const { cartItems, setCartItems } = useCartContext();
	const [isLoading, setIsLoading] = useState(false);

	const isSoldOut = quantity === 0;

	const handleAddToCart = () => {
		if (!size || isSoldOut) return;
		if (cartItems.length >= LIMIT_CART_SIZE)
			toast.error(`You are allowed to add only ${LIMIT_CART_SIZE} items to the cart`);

		setIsLoading(true);
		setCartItems([
			...cartItems,
			{
				id,
				name,
				image,
				size,
			},
		]);
		setSize(undefined);
		setTimeout(() => {
			setIsLoading(false);
			toast.success('Successfully added to cart!');
		}, 200);
	};

	return (
		<div className="pt-3">
			<p className="text-[16px]">Select Size:</p>
			<div className="flex flex-row flex-wrap gap-1 pt-2 pb-5">
				{DEFAULT_SIZES.map((currSize, idx) => (
					<div
						onClick={() =>
							(!isSoldOut || convertArrayStrings(sizes).includes(currSize)) && setSize(currSize)
						}
						key={id + idx}
						className={cn(
							'cursor-pointer border border-zinc-300 hover:border-zinc-800 hover:text-zinc-800 p-2 ease-in duration-75',
							size === currSize && 'bg-zinc-700 text-white hover:text-white',
							(isSoldOut || !convertArrayStrings(sizes).includes(currSize)) &&
								'cursor-not-allowed bg-zinc-300 text-zinc-500 hover:border-zinc-300 hover:text-zinc-500'
						)}
					>
						US M {currSize}
					</div>
				))}
			</div>

			<Button
				onClick={() => handleAddToCart()}
				localLoaderOnClick={false}
				isLoading={isLoading}
				color="primary"
				className="py-3 px-6 mb-5"
				disabled={!size}
			>
				<IoIosAddCircle className="text-xl mr-1" />
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCart;
