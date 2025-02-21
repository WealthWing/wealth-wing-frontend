import { apiBase } from 'data/api-base';
import { type CreateJobRequest, type JobResponse } from 'data/client-definitions';

export const projectQueries = apiBase.injectEndpoints({
	endpoints: (builder) => ({
		getJob: builder.query<JobResponse, { projectId: string }>({
			query: ({ projectId }) => {
				return {
					url: `/project/detail/${projectId}`,
					method: 'GET'
				};
			}
		}),
		getJobs: builder.query<JobResponse[], void>({
			query: () => {
				return {
					url: '/project/all',
					method: 'GET'
				};
			}
		}),
		createJob: builder.mutation<JobResponse, CreateJobRequest>({
			query: (params) => ({
				url: '/scope/create',
				method: 'POST',
				body: JSON.stringify({
					params
				})
			})
		})
	})
});

export const {
	useGetJobQuery,
	useLazyGetJobQuery,
	useGetJobsQuery,
	useLazyGetJobsQuery,
	useCreateJobMutation
} = projectQueries;
