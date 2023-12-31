'use client';

//* LIB
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

//* IMPORT
import PaginationButtons from '../buttons/PaginationButtons';
import Loader from '../loaders/Loader';
import NotFoundText from '../NotFoundText';
import ProductGrids from '../ProductGrids';

import { fetchProducts } from '@/src/api/products/GET';
import { PRODUCTS_PER_PAGE } from '@/src/utils/constants';

interface SearchProductSectionProp {
	search: string;
	onClose?: () => void;
}
const SearchProductSection = ({ search, onClose }: SearchProductSectionProp) => {
	const [page, setPage] = useState(1);

	const { isLoading, data: products } = useQuery({
		queryKey: ['initProducts', search],
		queryFn: () => fetchProducts(search),
		refetchOnWindowFocus: false,
	});

	if (isLoading) return <Loader />;

	if (!products || !products.length) return <NotFoundText>No Products Found.</NotFoundText>;

	return (
		<>
			<ProductGrids products={products} handleClickAfter={onClose} />
			{products.length !== 0 && (
				<PaginationButtons
					currentPage={page}
					disableNextPage={products.length < PRODUCTS_PER_PAGE}
					handlePrev={() => page !== 1 && setPage(page - 1)}
					handleNext={() => products.length >= PRODUCTS_PER_PAGE && setPage(page + 1)}
				/>
			)}
		</>
	);
};

export default SearchProductSection;
