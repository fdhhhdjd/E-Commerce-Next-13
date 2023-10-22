'use client';

//* LIB
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoArrowForwardOutline } from 'react-icons/io5';

//* IMPORT
import { displayNumbers } from '../../helpers/numbers';
import { useCartContext } from '../../providers/CartContextProvider';
import { useUserContext } from '../../providers/UserProvider';
import Button from '../buttons/Button';
import CartCard from '../cards/CartCard';
import Loader from '../loaders/Loader';
import NotFoundText from '../NotFoundText';

const CartSection = () => {
	const { user } = useUserContext();
	const { cartItems } = useCartContext();
	const [isRedirecting] = useState(false);

	const router = useRouter();

	const totalPrice = useMemo(() => cartItems.reduce((acc, curr) => acc + (curr?.price ?? 0), 0), [cartItems]);

	const handleCheckout = () => {
		if (!user || !user.email) toast.error('Please sign-in before checking out');
	};

	if (isRedirecting) return <Loader />;

	return (
		<div className="mx-auto max-w-4xl w-full py-4 sm:px-0 px-2">
			<h2 className="text-2xl font-black mb-4">Your Cart ({cartItems.length}):</h2>
			{cartItems.length > 0 ? (
				<>
					{cartItems.map((item, idx) => (
						<CartCard index={idx} key={item.id + idx} item={item} />
					))}

					<div className="w-full flex flex-col items-end my-10">
						<p className="font-medium mb-2">Your Total</p>
						<h2 className="text-4xl font-black mb-4">${displayNumbers(totalPrice)}</h2>
						<div className="flex flex-row items-center gap-2">
							<Button onClick={() => router.push('/products')} color="secondary" className="px-6 py-3">
								Continue Shopping
							</Button>

							<Button
								onClick={() => handleCheckout()}
								color="primary"
								className="px-6 py-3"
								localLoaderOnClick={false}
							>
								Checkout
								<IoArrowForwardOutline className="text-xl ml-2" />
							</Button>
						</div>
					</div>
				</>
			) : (
				<NotFoundText>No Items.</NotFoundText>
			)}
		</div>
	);
};

export default CartSection;
