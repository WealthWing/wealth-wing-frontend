import { apiBase } from 'data/api-base';
import {
	GetImportsParams,
	ImportFileCompleteRequest,
	ImportFileCreateRequest,
	ImportFileCreateResponse,
	ImportFileListItem
} from 'data/api-definitions';

export const {
	useStartImportMutation,
	useCompleteImportMutation,
	useGetImportsQuery,
	useLazyGetImportsQuery
} = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		startImport: builder.mutation<ImportFileCreateResponse, ImportFileCreateRequest>({
			query: (params) => ({
				url: '/import/start',
				method: 'POST',
				body: JSON.stringify(params)
			})
		}),
		completeImport: builder.mutation<ImportFileCreateResponse, ImportFileCompleteRequest>({
			query: (params) => ({
				url: '/import/complete',
				method: 'POST',
				body: JSON.stringify(params)
			})
		}),
		getImports: builder.query<ImportFileListItem[], GetImportsParams>({
			query: (params) => ({
				url: '/import/imports',
				method: 'GET',
				params
			})
		})
	})
});
