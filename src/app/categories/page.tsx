//* IMPORT
import BackButton from '@/src/components/buttons/BackButton';
import CategorySection from '@/src/components/CategorySection';

const CategoriesPage = () => {
	return (
		<div>
			<BackButton />
			<CategorySection displaySeeAllButton={false} displayTotal />
		</div>
	);
};

export default CategoriesPage;
