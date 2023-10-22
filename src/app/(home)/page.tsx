//* IMPORT
import CategorySection from '@/src/components/CategorySection';
import Hero from '@/src/components/heros/Hero';
import ProductComponent from '@/src/components/sections/PopularProductsSection';

const HomePage = () => {
	return (
		<div>
			<Hero />
			<ProductComponent />
			<CategorySection />
		</div>
	);
};

export default HomePage;
