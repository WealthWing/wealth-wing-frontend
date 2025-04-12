import { apiBase } from 'data/api-base';
import { CreateScopeRequest, ScopeResponse } from 'data/api-definitions';

export const scopeQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		getScope: builder.query<ScopeResponse[], { projectId: string }>({
			query: ({ projectId }) => {
				return {
					url: `/scope/all/${projectId}`,
					method: 'GET'
				};
			},
			providesTags: ['ScopeResponse', 'ExpenseResponse']
		}),
		createScope: builder.mutation<ScopeResponse, CreateScopeRequest>({
			query: (params) => ({
				url: '/scope/create',
				method: 'POST',
				body: JSON.stringify(params)
			}),
			invalidatesTags: ['ScopeResponse', 'ExpenseResponse']
		})
	})
});

export const { useGetScopeQuery, useLazyGetScopeQuery, useCreateScopeMutation } = scopeQueries;
