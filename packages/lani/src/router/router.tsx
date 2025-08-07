import { createBrowserRouter } from 'react-router-dom';
import { AccountPage } from 'router/account/account-page';
import { Jobs } from 'router/jobs/jobs';
import { Layout } from 'router/layout';
import { Scope } from 'router/scope/scope';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'jobs',
				element: <Jobs />,
				children: [
					{
						path: ':jobId',
						element: <Scope />
					}
				]
			},
			{
				path: 'accounts',
				element: <AccountPage />
			}
		]
	}
]);
