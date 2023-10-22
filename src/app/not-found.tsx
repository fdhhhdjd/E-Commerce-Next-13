'use client';

//* LIB
import { useRouter } from 'next/navigation';

//* IMPORT
import Button from '../components/buttons/Button';

const NotFoundPage = () => {
	const router = useRouter();

	const qq11 = 'hello';

	if (!qq11) console.info(123);

	return (
		<div className="h-[60vh] py-20 flex flex-col items-center">
			<h2 className="font-black text-4xl text-red-800 mb-4">404 Not Found</h2>
			<p>Oh uh.. looks like the page you&apos;re looking for doesn&apos;t exist</p>
			<Button onClick={() => router.push('/')} color="primary" className="py-2 px-4 mt-5">
				Back Home
			</Button>
		</div>
	);
};

export default NotFoundPage;
