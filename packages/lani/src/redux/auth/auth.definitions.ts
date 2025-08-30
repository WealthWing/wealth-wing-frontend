import { UserResponse } from 'data/api-definitions';

export type AuthState = {
	isSignedIn: boolean;
	isAuthInProgress: boolean;
	canReadData?: boolean;
	canCreateOrUpdate?: boolean;
	canDelete?: boolean;
	canManageUsers?: boolean;
	canManageOrgSettings?: boolean;
	canManageBilling?: boolean;
	user?: UserResponse;
};
