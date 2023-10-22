'use client';

//* LIB
import { useQuery } from '@tanstack/react-query';

//* IMPORT
import Border from '../Border';
import SeeAllButton from '../buttons/SeeAllButton';
import Loader from '../loaders/Loader';
import ProductGrids from '../ProductGrids';

import { fetchAllProducts } from '@/src/api/products/GET';
import ErrorPage from '@/src/app/error';

const ProductComponent = () => {
	const skip = 1;

	const {
		data: products,
		isLoading,
		isError,
		refetch,
	} = useQuery(['initProducts'], () => fetchAllProducts(skip), {
		onError: (err) => console.info(err),
		refetchOnWindowFocus: false,
	});

	if (isLoading) return <Loader />;

	if (isError)
		return (
			<ErrorPage
				error={{
					message: 'Error page CategorySection',
				}}
				reset={() => refetch()}
			/>
		);
	return (
		<>
			<Border />
			<div className="sm:mx-3 px-2 sm:py-10 py-5">
				<div className="mx-auto max-w-6xl flex flex-row items-center justify-between mb-4">
					<h2 className="text-2xl font-black">Heat Sneakers 🔥</h2>
					<SeeAllButton route="/products" />
				</div>
				<ProductGrids products={products} />
			</div>
		</>
	);
};

export default ProductComponent;
