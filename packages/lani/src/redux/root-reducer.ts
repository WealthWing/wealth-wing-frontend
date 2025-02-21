import { combineReducers } from '@reduxjs/toolkit';
import { apiBase } from 'data/api-base';

export const appReducer = combineReducers({
	[apiBase.reducerPath]: apiBase.reducer
});
