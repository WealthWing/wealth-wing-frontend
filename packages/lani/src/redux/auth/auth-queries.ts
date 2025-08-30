import { apiBase } from 'data/api-base';
import { UserResponse } from 'data/api-definitions';

export const { useUserDataQuery, useLazyUserDataQuery } = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		userData: builder.query<UserResponse, void>({
			query: () => ({
				url: '/user/me',
				method: 'GET'
			})
		})
	})
});
