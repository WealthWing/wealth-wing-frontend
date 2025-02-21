import { TayoProvider } from '@wealth-wing/tayo';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/router';

export const App = () => {
	return (
		<TayoProvider>
			<RouterProvider router={router} />
		</TayoProvider>
	);
};
