import { apiBase } from 'data/api-base';
import type { CreateJobRequest, JobResponse, ProjectUpdateRequest } from 'data/api-definitions';

export const projectQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		getJob: builder.query<JobResponse, { projectId: string }>({
			query: ({ projectId }) => {
				return {
					url: `/project/detail/${projectId}`,
					method: 'GET'
				};
			},
			providesTags: ['JobResponse']
		}),
		getJobs: builder.query<JobResponse[], void>({
			query: () => {
				return {
					url: '/project/all',
					method: 'GET'
				};
			},
			providesTags: ['JobResponse']
		}),
		createJob: builder.mutation<JobResponse, CreateJobRequest>({
			query: (params) => ({
				url: '/project/create',
				method: 'POST',
				body: JSON.stringify(params)
			}),
			invalidatesTags: ['JobResponse']
		}),
		updateJob: builder.mutation<
			JobResponse,
			{ projectId: string; params: ProjectUpdateRequest }
		>({
			query: ({ projectId, params }) => ({
				url: `/project/update/${projectId}`,
				method: 'PUT',
				body: JSON.stringify(params)
			}),
			invalidatesTags: ['JobResponse']
		}),
		deleteJob: builder.mutation<void, { projectId: string }>({
			query: ({ projectId }) => ({
				url: `/project/delete/${projectId}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['JobResponse']
		})
	})
});

export const {
	useGetJobQuery,
	useLazyGetJobQuery,
	useGetJobsQuery,
	useLazyGetJobsQuery,
	useCreateJobMutation,
	useUpdateJobMutation,
	useDeleteJobMutation
} = projectQueries;
