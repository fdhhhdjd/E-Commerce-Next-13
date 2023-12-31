//* LIB
import Image from 'next/image';

interface Category {
	id: string;
	name: string;
	image: string;
	description: string;
}
const CategoryHero = ({ category: { id, name, image, description } }: { category: Category }) => {
	return (
		<div className="md:px-10 md:py-20 p-2 flex md:flex-row flex-col items-center justify-center">
			<div>
				<Image src={image} alt={id} priority={true} height={200} width={200} className="h-auto w-auto" />
			</div>
			<div className="md:p-8 p-5 md:flex-[0.8]">
				<h2 className="text-4xl font-black mb-2 text-red-800">✨Nike {name}✨</h2>
				<p className="font-medium mb-2">{description}</p>
			</div>
		</div>
	);
};

export default CategoryHero;
