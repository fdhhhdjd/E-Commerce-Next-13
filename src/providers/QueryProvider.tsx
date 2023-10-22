'use client';

//* LIB
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';

export function QueryClientContextProvider(props: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{props.children}
			</QueryClientProvider>
		</>
	);
}
