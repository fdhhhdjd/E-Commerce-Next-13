import { useQuery } from '@tanstack/react-query';

import { FullProductClient } from '../../types/types';
import Border from '../Border';
import SeeAllButton from '../buttons/SeeAllButton';
import Loader from '../loaders/Loader';
import ProductGrids from '../ProductGrids';

import { fetchDetailCategory } from '@/src/api/categories/GET';
import { fetchAllProducts } from '@/src/api/products/GET';
import ErrorPage from '@/src/app/error';

interface ProductSuggestionSectionProps {
	product: FullProductClient;
}

const ProductSuggestionSection = ({ product }: ProductSuggestionSectionProps) => {
	const { id: skipProductId, categoryId } = product;

	const {
		data: products,
		isLoading,
		isError,
		refetch,
	} = useQuery({
		queryKey: ['initProducts'],
		queryFn: () => fetchAllProducts(skipProductId),
		refetchOnWindowFocus: false,
	});

	const { data: category } = useQuery({
		queryKey: ['initDetailCategory'],
		queryFn: () => fetchDetailCategory(categoryId),
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
					<h2 className="text-2xl font-black">More {category?.name}:</h2>
					<SeeAllButton route={`/categories/${categoryId}`} />
				</div>
				<ProductGrids products={products} />
			</div>
		</>
	);
};

export default ProductSuggestionSection;
