import { apiBase } from 'data/api-base';
import {
	SubscriptionRequest,
	SubscriptionResponse,
	SubscriptionSummaryResponse,
	SubscriptionTransactionsAllResponse,
	SubscriptionUpdateRequest
} from 'data/api-definitions';

export const {
	useGetSubscriptionsQuery,
	useLazyGetSubscriptionsQuery,
	useGetSubscriptionQuery,
	useLazyGetSubscriptionQuery,
	useCreateSubscriptionMutation,
	useUpdateSubscriptionMutation,
	useDeleteSubscriptionMutation,
	useGetSubscriptionTransactionsQuery,
	useLazyGetSubscriptionTransactionsQuery,
	useGetSubscriptionSummaryQuery,
	useLazyGetSubscriptionSummaryQuery
} = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		getSubscriptions: builder.query<SubscriptionResponse[], void>({
			query: () => ({
				url: '/subscription/all',
				method: 'GET'
			}),
			providesTags: ['SubscriptionList']
		}),
		getSubscription: builder.query<SubscriptionResponse, { subscriptionId: string }>({
			query: ({ subscriptionId }) => ({
				url: `/subscription/detail/${subscriptionId}`,
				method: 'GET'
			})
		}),
		getSubscriptionTransactions: builder.query<
			SubscriptionTransactionsAllResponse,
			{ subscriptionId: string }
		>({
			query: ({ subscriptionId }) => ({
				url: `/subscription/${subscriptionId}/transactions`,
				method: 'GET'
			})
		}),
		getSubscriptionSummary: builder.query<SubscriptionSummaryResponse, void>({
			query: () => ({
				url: `/subscription/summary`,
				method: 'GET'
			})
		}),
		createSubscription: builder.mutation<SubscriptionResponse, SubscriptionRequest>({
			query: (params) => ({
				url: '/subscription/create',
				method: 'POST',
				body: JSON.stringify(params)
			}),
			invalidatesTags: ['SubscriptionList']
		}),
		updateSubscription: builder.mutation<
			SubscriptionResponse,
			{ subscriptionId: string; params: SubscriptionUpdateRequest }
		>({
			query: ({ subscriptionId, params }) => ({
				url: `/subscription/update/${subscriptionId}`,
				method: 'PUT',
				body: JSON.stringify(params)
			}),
			invalidatesTags: ['SubscriptionList']
		}),
		deleteSubscription: builder.mutation<void, { subscriptionId: string }>({
			query: ({ subscriptionId }) => ({
				url: `/subscription/delete/${subscriptionId}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['SubscriptionList']
		})
	})
});
