import 'assets/index.css';

import { App } from 'app';
import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'redux/store';

const userPoolId = import.meta.env.VITE_APP_USER_POOL_ID;
const userPoolClientId = import.meta.env.VITE_APP_USER_POOL_CLIENT_ID;
const identityPoolId = import.meta.env.VITE_APP_IDENTITY_POOL_ID;

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId,
			userPoolClientId,
			identityPoolId,
			loginWith: {
				email: true
			},
			signUpVerificationMethod: 'code',
			userAttributes: {
				email: {
					required: true
				}
			},
			allowGuestAccess: true
		}
	}
});

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
