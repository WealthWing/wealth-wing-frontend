import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiBase } from 'data/api-base';
import { appReducer } from 'redux/root-reducer';

const store = configureStore({
	reducer: appReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiBase.middleware)
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
