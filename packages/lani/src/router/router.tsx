import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AccountPage } from 'router/account/account-page';
import { AiChatPage } from 'router/ai/ai-chat-page';
import { Layout } from 'router/layout';
import { PageNotFound } from 'router/not-found';
import { SandboxPage } from 'router/sandbox/sandbox-page';

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
				path: '',
				element: <Navigate to="/accounts" replace />
			},
			{
				path: 'ai',
				element: <AiChatPage />
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
