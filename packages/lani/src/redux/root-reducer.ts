import { combineReducers } from '@reduxjs/toolkit';
import { aiApiBase } from 'data/ai-api-base';
import { apiBase } from 'data/api-base';
import { authReducer } from 'redux/auth';

export const appReducer = combineReducers({
	auth: authReducer,
	[apiBase.reducerPath]: apiBase.reducer,
	[aiApiBase.reducerPath]: aiApiBase.reducer
});
