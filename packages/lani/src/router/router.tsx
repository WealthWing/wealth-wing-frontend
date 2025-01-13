import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'router/layout';
import { Subscriptions } from 'router/subscriptions';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Subscriptions />
			}
		]
	}
]);
