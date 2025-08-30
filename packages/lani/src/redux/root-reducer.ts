import { combineReducers } from '@reduxjs/toolkit';
import { apiBase } from 'data/api-base';
import { authReducer } from 'redux/auth';

export const appReducer = combineReducers({
	auth: authReducer,
	[apiBase.reducerPath]: apiBase.reducer
});
