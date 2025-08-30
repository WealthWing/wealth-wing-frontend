import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from 'data/api-definitions';
import { AuthState } from 'redux/auth/auth.definitions';

const initialState: AuthState = {
	isSignedIn: false,
	isAuthInProgress: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserResponse>) => {
			const { email, role, uuid, organization_id: organizationId } = action.payload;

			const canReadData = [
				'User_Viewer',
				'User_Editor',
				'User_Manager',
				'Admin',
				'SuperAdmin'
			].includes(role);

			const canCreateOrUpdate = [
				'User_Editor',
				'User_Manager',
				'Admin',
				'SuperAdmin'
			].includes(role);

			const canDelete = ['User_Manager', 'Admin', 'SuperAdmin'].includes(role);

			const canManageUsers = ['Admin', 'SuperAdmin'].includes(role);

			const canManageOrgSettings = ['Admin', 'SuperAdmin'].includes(role);

			const canManageBilling = ['Admin', 'SuperAdmin'].includes(role);

			return {
				...state,
				canReadData,
				canCreateOrUpdate,
				canDelete,
				canManageUsers,
				canManageOrgSettings,
				canManageBilling,
				user: {
					email,
					role,
					uuid,
					organization_id: organizationId
				}
			};
		},
		setSignedIn: (state, action: PayloadAction<boolean>) => {
			const isSignedIn = action.payload;

			return {
				...state,
				isSignedIn
			};
		},
		setAuthInProgress: (state, action: PayloadAction<boolean>) => {
			const isAuthInProgress = action.payload;

			return {
				...state,
				isAuthInProgress
			};
		}
	}
});

export const { setUserData, setSignedIn, setAuthInProgress } = authSlice.actions;
export const authReducer = authSlice.reducer;
