'use client';

//* LIB
import { useQuery } from '@tanstack/react-query';

//* IMPORT
import PaginationButtons from '../buttons/PaginationButtons';
import Loader from '../loaders/Loader';
import ProductGrids from '../ProductGrids';

import { fetchAllProducts } from '@/src/api/products/GET';
import ErrorPage from '@/src/app/error';
import { PRODUCTS_PER_PAGE } from '@/src/utils/constants';

interface Props {
	page: number;
}

const AllProductsSection = ({ page }: Props) => {
	const skip = page > 1 ? (page - 1) * PRODUCTS_PER_PAGE : undefined;

	const {
		data: products,
		isLoading,
		isError,
		refetch,
	} = useQuery({
		queryKey: ['initProducts'],
		queryFn: () => fetchAllProducts(skip),
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
		<div className="sm:mx-3 px-2 sm:py-10 py-5">
			<h2 className="mx-auto max-w-6xl text-2xl font-black mb-4">All Available Products:</h2>
			<ProductGrids products={products} />
			<PaginationButtons
				currentPage={page}
				route="/products"
				disableNextPage={products.length < PRODUCTS_PER_PAGE}
			/>
		</div>
	);
};

export default AllProductsSection;
