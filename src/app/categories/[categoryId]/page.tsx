'use client';

//* LIB
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

//* IMPORT
import { fetchDetailCategory } from '@/src/api/categories/GET';
import ErrorPage from '@/src/app/error';
import Border from '@/src/components/Border';
import BackButton from '@/src/components/buttons/BackButton';
import CategoryHero from '@/src/components/heros/CategoryHero';
import Loader from '@/src/components/loaders/Loader';

interface PageProps {
	params: {
		categoryId: string;
	};
	searchParams?: {
		page?: string;
	};
}

const CategoryIdPage = (props: PageProps) => {
	const page = props.searchParams?.page;

	const {
		params: { categoryId },
	} = props;

	const queryClient = useQueryClient();

	const {
		data: category,
		isLoading,
		isError,
		refetch,
	} = useQuery(['initDetailCategories'], () => fetchDetailCategory(categoryId), {
		onError: (err) => console.info(err),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		return () => {
			queryClient.removeQueries(['initDetailCategories']);
		};
	}, [categoryId]);
	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return (
			<ErrorPage
				error={{
					message: 'Error page Category Detail',
				}}
				reset={() => refetch()}
			/>
		);
	}
	return (
		<div>
			<BackButton routeTo={page ? '/' : undefined} />
			<Border />
			<CategoryHero key={category} category={category} />
		</div>
	);
};

export default CategoryIdPage;
