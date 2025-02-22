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
			}
		}),
		createScope: builder.mutation<ScopeResponse, CreateScopeRequest>({
			query: (params) => ({
				url: '/scope/create',
				method: 'POST',
				body: JSON.stringify({
					params
				})
			})
		})
	})
});

export const { useGetScopeQuery, useLazyGetScopeQuery, useCreateScopeMutation } = scopeQueries;
