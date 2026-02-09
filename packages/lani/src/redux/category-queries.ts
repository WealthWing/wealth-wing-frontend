import { apiBase } from 'data/api-base';
import { CategoryResponse } from 'data/api-definitions';

export const { useGetCategoriesQuery } = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		getCategories: builder.query<CategoryResponse[], void>({
			query: () => ({
				url: '/category/categories',
				method: 'GET'
			})
		})
	})
});
