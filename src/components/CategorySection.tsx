'use client';

import { useQuery } from '@tanstack/react-query';

import Border from './Border';
import SeeAllButton from './buttons/SeeAllButton';
import { CategoryCard } from './cards/CategoryCard';
import Loader from './loaders/Loader';
import NotFoundText from './NotFoundText';
import { fetchAllCategory } from '../api/categories/GET';
import ErrorPage from '../app/error';

const CategorySection = ({
	displaySeeAllButton = true,
	displayTotal = false,
}: {
	displaySeeAllButton?: boolean;
	displayTotal?: boolean;
}) => {
	const {
		isLoading,
		isError,
		data: categories,
		refetch,
	} = useQuery({
		queryKey: ['initCategories'],
		queryFn: () => fetchAllCategory(),
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
					<h2 className="text-2xl font-black">Sneaker Types {displayTotal && `(${categories.length})`} 🚀</h2>
					{displaySeeAllButton && <SeeAllButton route="/categories" />}
				</div>
				{categories.length ? (
					<div className="mx-auto max-w-6xl w-full grid sm:grid-cols-2  grid-cols-1 gap-2">
						{categories.map((category: { id: string; name: string; image: string }) => (
							<CategoryCard key={category.id} {...category} />
						))}
					</div>
				) : (
					<NotFoundText>No Sneaker Types Found.</NotFoundText>
				)}
			</div>
		</>
	);
};

export default CategorySection;
