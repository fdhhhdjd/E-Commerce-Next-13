'use client';

//* LIB
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';

const QueryClientContextProvider = (props: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{props.children}
			</QueryClientProvider>
		</>
	);
};

export default QueryClientContextProvider;
