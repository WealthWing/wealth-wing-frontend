import { Button, Heading, RightSidebar, useDisclosureControl } from '@wealth-wing/tayo';
import { HeadingContainer } from 'components/heading-container';
import { useParams } from 'react-router-dom';
import { useGetJobQuery } from 'redux/job-queries';
import { useGetScopeQuery } from 'redux/scope-queries';
import { AddScope } from 'router/scope/add-scope';
import { JobScope } from 'router/scope/job-scope';
import { scope } from 'router/scope/scope.styles';

export const Scope = () => {
	const { jobId = '' } = useParams();
	const { isOpen, handleOpen } = useDisclosureControl();
	const { data } = useGetJobQuery({ projectId: jobId });

	const { data: scopeData } = useGetScopeQuery({ projectId: jobId });

	return (
		<div style={{ display: 'flex', position: 'relative' }}>
			<div css={scope.root}>
				<Button variant="danger" format="outline" onClick={handleOpen}>
					Open Right Sidebar
				</Button>

				<div css={scope.container}>
					<div css={scope.scopes}>
						{scopeData?.map((s) => (
							<JobScope key={s.uuid} data={s} />
						))}
						<AddScope />
					</div>
				</div>
			</div>
			<RightSidebar isOpen={isOpen}>Children</RightSidebar>
		</div>
	);
};
