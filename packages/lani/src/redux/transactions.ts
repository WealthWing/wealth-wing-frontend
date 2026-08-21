import { apiBase } from 'data/api-base';
import { TransactionSummaryRequest, TransactionSummaryResponse } from 'data/api-definitions';

export const { useGetTransactionSummaryQuery, useLazyGetTransactionSummaryQuery } =
	apiBase.injectEndpoints({
		endpoints: (builder) => ({
			getTransactionSummary: builder.query<
				TransactionSummaryResponse,
				TransactionSummaryRequest
			>({
				query: (params) => ({
					url: '/transaction/summary',
					method: 'GET',
					params
				})
			})
		})
	});
