import { createBrowserRouter } from 'react-router-dom';
import { Jobs } from 'router/jobs/jobs';
import { Layout } from 'router/layout';
import { Section } from 'router/section';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'jobs',
				element: <Jobs />
			},
			{
				path: 'jobs/:jobId',
				element: <Section />
			}
		]
	}
]);
