import { apiBase } from 'data/api-base';
import { TransactionAllResponse, TransactionRequest } from 'data/api-definitions';

export const transactionQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		asd: builder.infiniteQuery<TransactionAllResponse, void, TransactionRequest>({
			infiniteQueryOptions: {
				initialPageParam: {
					page: 1,
					page_size: 10
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

			query({ pageParam }) {
				return {
					url: '/transaction/all',
					method: 'GET',
					params: pageParam
				};
			}
		})
	})
});

export const { useAsdInfiniteQuery } = transactionQueries;
