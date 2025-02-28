import { Button, RightSidebar, useDisclosureControl } from '@wealth-wing/tayo';
import { useParams } from 'react-router-dom';
import { useGetScopeQuery } from 'redux/scope-queries';
import { AddScope } from 'router/scope/add-scope';
import { JobScope } from 'router/scope/job-scope';
import { scope } from 'router/scope/scope.styles';

export const Scope = () => {
	const { jobId = '' } = useParams();
	const { isOpen, handleOpen } = useDisclosureControl();

	const { data: scopeData, error, isLoading } = useGetScopeQuery({ projectId: jobId });

	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log(error);
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
		)
	);
};
