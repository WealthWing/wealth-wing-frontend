import { createBrowserRouter } from 'react-router-dom';
import { AccountPage } from 'router/account/account-page';
import { Layout } from 'router/layout';
import { PageNotFound } from 'router/not-found';
import { TransactionsPage } from 'router/transaction/transactions-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <TransactionsPage />
			},
			{
				path: 'accounts',
				element: <AccountPage />
			},
			{
				path: '*',
				element: <PageNotFound />
			}
		]
	}
]);
