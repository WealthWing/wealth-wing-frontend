import { apiBase } from 'data/api-base';
import { ExpenseCreateRequest, ExpenseResponse } from 'data/api-definitions';

export const expenseQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		createExpense: builder.mutation<ExpenseResponse, ExpenseCreateRequest>({
			query: (params) => ({
				url: '/expense/create',
				method: 'POST',
				body: JSON.stringify(params)
			}),
			invalidatesTags: ['ScopeResponse', 'JobResponse']
		})
	})
});

export const { useCreateExpenseMutation } = expenseQueries;
