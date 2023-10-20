'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

import Border from '../../../components/Border';
import BackButton from '../../../components/buttons/BackButton';

import { fetchDetailProducts } from '@/src/api/products/GET';
import Loader from '@/src/components/loaders/Loader';
import ProductSection from '@/src/components/sections/ProductSection';

interface PageProps {
	params: {
		productId: number;
	};
}

const ProductIdPage = ({ params: { productId } }: PageProps) => {
	const queryClient = useQueryClient();

	const {
		data: product,
		isLoading,
		isError,
	} = useQuery(['detailProducts'], () => fetchDetailProducts(productId), {
		onError: (err) => console.info(err),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		return () => {
			queryClient.removeQueries(['detailProducts']);
		};
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	if (!product) {
		return notFound();
	}

	if (isError) {
		return <div>Error loading products</div>;
	}

	return (
		<>
			<BackButton />
			<Border />
			{product && <ProductSection product={product} />}

			{/* <ProductSuggestionSection product={product} /> */}
		</>
	);
};

export default ProductIdPage;
