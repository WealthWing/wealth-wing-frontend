import { apiBase } from 'data/api-base';
import {
	ImportFileCompleteRequest,
	ImportFileCreateRequest,
	ImportFileCreateResponse,
	ImportFileListItem,
	ImportsRequestParams
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
		getImports: builder.query<ImportFileListItem[], ImportsRequestParams>({
			query: (params) => ({
				url: '/import/imports',
				method: 'GET',
				params
			})
		})
	})
});
