import { createBrowserRouter } from 'react-router-dom';
import { Jobs } from 'router/jobs';
import { Layout } from 'router/layout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'jobs',
				element: <Jobs />
			}
		]
	}
]);
