import { apiBase } from 'data/api-base';
import { CateoryResponse } from 'data/api-definitions';

export const expenseQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		cagetories: builder.query<CateoryResponse[], void>({
			query: () => ({
				url: '/category/categories',
				method: 'GET'
			})
		})
	})
});

export const { useCagetoriesQuery, useLazyCagetoriesQuery } = expenseQueries;
