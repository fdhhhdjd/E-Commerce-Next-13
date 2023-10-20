'use client';
import React, { useEffect } from 'react';

import Button from '@/src/components/buttons/Button';

interface CustomError {
	message: string;
}

interface ErrorProps {
	error?: CustomError | { digest?: string };
	reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="h-[60vh] py-20 flex flex-col items-center">
			<h2 className="font-black text-4xl text-red-800 mb-4">500 Error</h2>
			<p>Oh my good.. Something went wrong 🫡!</p>
			<Button onClick={() => reset()} color="primary" className="py-2 px-4 mt-5">
				Try again
			</Button>
		</div>
	);
};

export default ErrorPage;
