//* IMPORT
import Loader from '@/src/components/loaders/Loader';

const Loading = () => {
	return (
		<div className="h-[60vh] py-20 w-full flex flex-row items-center justify-center">
			<Loader />
		</div>
	);
};

export default Loading;
