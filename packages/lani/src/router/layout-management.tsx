import { createProvider } from '@wealth-wing/tayo';

export type AuthState = 'verifying' | 'signedIn' | 'signIn';

export type AuthProviderProps = {
	authState: AuthState;
	setAuthState: (authState: AuthState) => void;
};

export const [AuthProvider, useAuth] = createProvider<AuthProviderProps>('AuthProvider');
