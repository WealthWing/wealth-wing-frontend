import { apiBase } from 'data/api-base';
import { AccountRequest, AccountResponse, AccountUpdateRequest } from 'data/api-definitions';

export const {
	useAddAccountMutation,
	useGetAcccountsQuery,
	useLazyGetAcccountsQuery,
	useGetAcccountQuery,
	useLazyGetAcccountQuery,
	useUpdateAccountMutation
} = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		getAcccounts: builder.query<AccountResponse, void>({
			query: () => ({
				url: '/account/all',
				method: 'GET'
			})
		}),
		getAcccount: builder.query<AccountResponse, { accountId: string }>({
			query: ({ accountId }) => ({
				url: `/account/${accountId}`,
				method: 'GET'
			})
		}),
		addAccount: builder.mutation<AccountResponse, AccountRequest>({
			query: (params) => ({
				url: '/account/create',
				method: 'POST',
				body: JSON.stringify(params)
			})
		}),
		updateAccount: builder.mutation<
			AccountResponse,
			{ accountId: string; params: AccountUpdateRequest }
		>({
			query: ({ accountId, params }) => ({
				url: `account/${accountId}`,
				method: 'PUT',
				body: JSON.stringify(params)
			})
		})
	})
});
