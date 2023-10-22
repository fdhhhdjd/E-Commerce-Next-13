/* eslint-disable max-len */

//* LIB
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

//* IMPORT
import SeeAllButton from './SeeAllButton';

import cn from '@/src/helpers/cn';

const CheckoutBtn = () => {
	const cartItems = [];
	return (
		<Menu placement="bottom-end">
			<MenuHandler>
				<div className="flex flex-row items-center justify-center cursor-pointer border border-zinc-400 text-zinc-500 hover:border-zinc-700 hover:text-zinc-800 ease-in duration-100 p-2 rounded-md">
					<AiOutlineShoppingCart className="text-xl mr-1" />
					{cartItems.length > 0 && (
						<div className="absolute top-2 right-0 bg-red-800 h-6 w-6 rounded-full flex justify-center items-center">
							<p className="text-[12px] text-white">{cartItems.length}</p>
						</div>
					)}
				</div>
			</MenuHandler>

			<MenuList
				className={cn(
					'rounded-md bg-zinc-100 p-3 shadow-md mb-2 max-h-[500px] overflow-y-auto z-[2]',
					cartItems.length && 'max-w-[500px] w-full'
				)}
			>
				{cartItems.length ? (
					<div className="flex flex-row items-center justify-between gap-1 pb-4 mb-4 border-b border-zinc-300">
						<h3 className="text-xl font-black pl-2">Total ({cartItems.length})</h3>
						<SeeAllButton route="/carts">Checkout</SeeAllButton>
					</div>
				) : (
					<div className="p-3">
						<p className="text-[14px] text-center">Cart is empty.</p>
					</div>
				)}
			</MenuList>
		</Menu>
	);
};

export default CheckoutBtn;
