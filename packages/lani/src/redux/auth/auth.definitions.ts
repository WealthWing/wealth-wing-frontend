import { UserResponse } from 'data/api-definitions';

export type AuthState = {
	isSignedIn: boolean;
	isAuthInProgress: boolean;
	canReadData?: boolean;
	canCreateOrUpdate?: boolean;
	canDelete?: boolean;
	canManageUsers?: boolean;
	user?: UserResponse;
};
