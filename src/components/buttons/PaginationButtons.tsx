'use client';

//* LIB
import { useRouter } from 'next/navigation';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

//* IMPORT
import Button from './Button';

interface PaginationButtonsProps {
	currentPage: number;
	disableNextPage?: boolean;
	route?: string;
	handlePrev?: () => void;
	handleNext?: () => void;
}
const PaginationButtons = ({ currentPage, route, disableNextPage, handlePrev, handleNext }: PaginationButtonsProps) => {
	const router = useRouter();

	const handleNextPage = () => {
		if (disableNextPage) {
			return;
		}
		if (route) router.push(`${route}?page=${currentPage + 1}`);

		if (handleNext) handleNext();

		return;
	};

	const handlePrevPage = () => {
		if (currentPage === 1) return;

		if (route) router.push(`${route}?page=${currentPage - 1}`);

		if (handlePrev) handlePrev();
	};

	return (
		<div className="flex flex-row items-center justify-center my-10">
			<Button
				color="secondary"
				onClick={() => handlePrevPage()}
				className="p-3"
				disabled={currentPage === 1}
				localLoaderOnClick={false}
			>
				<IoArrowBackOutline className="text-xl" />
			</Button>
			<p className="mx-4 text-[16px]">Page {currentPage}</p>
			<Button
				color="secondary"
				onClick={() => handleNextPage()}
				className="p-3"
				disabled={disableNextPage}
				localLoaderOnClick={false}
			>
				<IoArrowForwardOutline className="text-xl" />
			</Button>
		</div>
	);
};

export default PaginationButtons;
