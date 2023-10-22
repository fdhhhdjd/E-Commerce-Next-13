'use client';

//* LIB
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

//* IMPORT
import Border from '../../../components/Border';
import BackButton from '../../../components/buttons/BackButton';

import { fetchDetailProducts } from '@/src/api/products/GET';
import Loader from '@/src/components/loaders/Loader';
import ProductSection from '@/src/components/sections/ProductSection';
import ProductSuggestionSection from '@/src/components/sections/ProductSuggestionSection';

interface PageProps {
	params: {
		productId: number;
	};
}

const ProductIdPage = ({ params: { productId } }: PageProps) => {
	const queryClient = useQueryClient();

	const { data: product, isLoading } = useQuery(['detailProducts'], () => fetchDetailProducts(productId), {
		onError: (err) => console.info(err),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		return () => {
			queryClient.removeQueries(['detailProducts', 'initDetailCategory']);
		};
	}, []);

	if (isLoading) return <Loader />;

	if (!product) return notFound();

	return (
		<>
			<BackButton />
			<Border />
			{product && <ProductSection product={product} />}
			<ProductSuggestionSection product={product} />
		</>
	);
};

export default ProductIdPage;
