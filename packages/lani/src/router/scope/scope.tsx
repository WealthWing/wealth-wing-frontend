import { Heading } from '@wealth-wing/tayo';
import { useParams } from 'react-router-dom';
import { useGetJobQuery } from 'redux/job-queries';
import { useGetScopeQuery } from 'redux/scope-queries';
import { AddScope } from 'router/scope/add-scope';
import { JobScope } from 'router/scope/job-scope';
import { scope } from 'router/scope/scope.styles';

export const Scope = () => {
	const { jobId = '' } = useParams();
	const { data } = useGetJobQuery({ projectId: jobId });

	const { data: scopeData } = useGetScopeQuery({ projectId: jobId });

	return (
		<div css={scope.root}>
			<Heading tag="h2">{data?.project_name}</Heading>

			<div css={scope.container}>
				<div css={scope.scopes}>
					{scopeData?.map((s) => (
						<JobScope key={s.uuid} data={s} />
					))}
					<AddScope />
				</div>
			</div>
		</div>
	);
};
