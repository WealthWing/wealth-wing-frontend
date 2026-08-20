import { createBrowserRouter } from 'react-router-dom';
import { AccountPage } from 'router/account/account-page';
import { AiChatPage } from 'router/ai/ai-chat-page';
import { Layout } from 'router/layout';
import { PageNotFound } from 'router/not-found';
import { ReportsPage } from 'router/reports/reports-page';
import { SandboxPage } from 'router/sandbox/sandbox-page';
import { SubscriptionsPage } from 'router/subscription/subscriptions-page';
import { TransactionsPage } from 'router/transaction/transactions-page';

export const router = createBrowserRouter([
	{
		path: '/sandbox',
		element: <SandboxPage activeRoute="home" />
	},
	{
		path: '/sandbox/architecture',
		element: <SandboxPage activeRoute="architecture" />
	},
	{
		path: '/sandbox/motion',
		element: <SandboxPage activeRoute="motion" />
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'ai',
				element: <AiChatPage />
			},
			{
				path: '',
				element: <TransactionsPage />
			},
			{
				path: 'accounts',
				element: <AccountPage />
			},
			{
				path: 'subscriptions',
				element: <SubscriptionsPage />
			},
			{
				path: 'reports',
				element: <ReportsPage />
			},
			{
				path: '*',
				element: <PageNotFound />
			}
		]
	}
]);
