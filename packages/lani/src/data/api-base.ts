import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuthTokens } from 'router/auth/auth-helpers';

export const apiBase = createApi({
	reducerPath: 'apiBase',

	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000',
		prepareHeaders: async (headers) => {
			headers.set('Content-Type', 'application/json');

			const { tokenId } = await getAuthTokens();

			headers.set('Authorization', `Bearer ${tokenId}`);

			return headers;
		}
	}),
	tagTypes: ['ScopeResponse', 'ExpenseResponse', 'JobResponse'],
	endpoints: () => ({})
});
