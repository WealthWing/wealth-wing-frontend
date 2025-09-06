import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuthTokens } from 'router/auth/auth-helpers';

const HOST = import.meta.env.VITE_API_URL;

export const apiBase = createApi({
	reducerPath: 'apiBase',

	baseQuery: fetchBaseQuery({
		baseUrl: HOST,
		prepareHeaders: async (headers) => {
			headers.set('Content-Type', 'application/json');

			const { tokenId } = await getAuthTokens();

			headers.set('Authorization', `Bearer ${tokenId}`);

			return headers;
		}
	}),
	tagTypes: ['ScopeResponse', 'ExpenseResponse', 'JobResponse', 'AddAccount', 'ImportCreate'],
	endpoints: () => ({})
});
