import { apiBase } from 'data/api-base';
import {
	SubscriptionCandidateResponse,
	TransactionAllResponse,
	TransactionRequest,
	TransactionSummaryRequest,
	TransactionSummaryResponse
} from 'data/api-definitions';

export const transactionQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		transactions: builder.infiniteQuery<
			TransactionAllResponse,
			TransactionRequest,
			TransactionRequest
		>({
			infiniteQueryOptions: {
				initialPageParam: {
					page: 1,
					page_size: 10,
					sort_by: 'date',
					sort_order: 'desc'
				},
				getNextPageParam: (lastPage, _unused, lastPageParam) => {
					if (!lastPage.has_more) {
						return undefined;
					}

					const nextPage = (lastPageParam?.page ?? 0) + 1;

					return {
						...lastPageParam,
						page: nextPage
					};
				}
			},
			query: ({ pageParam, queryArg }) => {
				const params = { ...pageParam, ...queryArg };

				return {
					url: '/transaction/all',
					method: 'GET',
					params: {
						...params,
						filter_by_inputs: JSON.stringify(
							queryArg?.filter_by_inputs ? queryArg.filter_by_inputs : []
						)
					}
				};
			},
			providesTags: ['ImportCreate']
		}),
		subscriptionCandidates: builder.query<SubscriptionCandidateResponse[], void>({
			query: () => ({
				url: 'transaction/subscription-candidates',
				method: 'GET'
			}),
			providesTags: ['ImportCreate']
		}),
		transactionsSummary: builder.query<TransactionSummaryResponse, TransactionSummaryRequest>({
			query: (pageParam) => ({
				url: 'transaction/summary',
				method: 'GET',
				params: pageParam
			}),
			providesTags: ['ImportCreate']
		})
	})
});

export const {
	useTransactionsInfiniteQuery,
	useTransactionsSummaryQuery,
	useLazyTransactionsSummaryQuery,
	useSubscriptionCandidatesQuery,
	useLazySubscriptionCandidatesQuery
} = transactionQueries;
