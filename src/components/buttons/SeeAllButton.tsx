'use client';

//* LIB
import { useRouter } from 'next/navigation';
import { IoArrowForwardOutline } from 'react-icons/io5';

//* IMPORT
import Button from './Button';

interface SeeAllButtonProps {
	children?: string | string[];
	route: string;
}

const SeeAllButton = ({ children, route }: SeeAllButtonProps) => {
	const router = useRouter();

	return (
		<Button onClick={() => router.push(route)} className="py-3 px-6" color="secondary">
			{children ?? 'See All'}
			<IoArrowForwardOutline className="text-xl ml-2" />
		</Button>
	);
};

export default SeeAllButton;
