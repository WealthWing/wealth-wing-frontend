import { useParams } from 'react-router-dom';
import { useGetScopeQuery } from 'redux/scope-queries';
import { AddScope } from 'router/scope/add-scope';
import { JobScope } from 'router/scope/job-scope';
import { scope } from 'router/scope/scope.styles';

export const Scope = () => {
	const { jobId = '' } = useParams();

	const { data: scopeData, error, isLoading } = useGetScopeQuery({ projectId: jobId });

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error...</div>;
	}

	/* 
	TODO:
	- handle loading state
	- handle error state
	- handle empty state
	- handle pagination
	- handle search
	- handle filter
	- handle sort
	*/

	return (
		!isLoading &&
		!error && (
			<div css={scope.root}>
				<div css={scope.container}>
					<div css={scope.scopes}>
						{scopeData?.map((s) => (
							<JobScope key={s.uuid} data={s} />
						))}
						<AddScope />
					</div>
				</div>
			</div>
		)
	);
};
