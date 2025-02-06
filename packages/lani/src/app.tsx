import { QueryClientProvider } from '@tanstack/react-query';
import { TayoProvider } from '@wealth-wing/tayo';
import { queryClient } from 'data/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/router';

export const App = () => {
	return (
		<TayoProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</TayoProvider>
	);
};
