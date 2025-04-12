import { Button, Flex, Heading, useDisclosureControl } from '@wealth-wing/tayo';
import { AddExpenseModal } from 'components/add-expense-modal';
import { container, HeadingContainer } from 'components/heading-container';
import { JobCard } from 'components/job-card';
import { Section } from 'components/section';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGetJobsQuery } from 'redux/job-queries';
import { CreateJobModal } from 'router/jobs/components/create-job-modal';
import { JobsProvider } from 'router/jobs/jobs.provider';
import { overflowX, stickyContainer } from 'router/jobs/jobs.styles';
// Task
export const Jobs = () => {
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();
	const [jobScopeId, setJobScopeId] = React.useState<string>('');

	const {
		isOpen: isRightSidebarOpen,
		handleOpen: handleRightSidebarOpen,
		handleClose: handleRightSidebarClose
	} = useDisclosureControl();
	const { data } = useGetJobsQuery();

	/**
	 * Todo: handle is loading state
	 * Todo: handle error state
	 * Todo: handle empty state
	 * Todo: handle pagination
	 * Todo: handle search
	 * Todo: handle filter
	 * Todo: handle sort
	 */

	const handleExpenseModalOpen = (id: string) => {
		setJobScopeId(id);
		handleRightSidebarOpen();
	};

	return (
		<JobsProvider
			isLeftModalOpen={isRightSidebarOpen}
			onLeftModalClose={handleRightSidebarClose}
			onLeftModalOpen={handleExpenseModalOpen}
		>
			<Flex direction="column" gap="s20" css={container}>
				<div css={stickyContainer}>
					<HeadingContainer>
						<Heading tag="h2">Jobs</Heading>
					</HeadingContainer>
					<Section
						title="Manage Jobs"
						subTitle="Your Hub for Big Projects: Create, manage, and monitor the jobs that drive your financial goals."
						button={
							<Button variant="tertiary" format="text" onClick={handleOpen}>
								Create Job
							</Button>
						}
					>
						<Flex direction="row" gap="s20" css={overflowX}>
							{data?.map((p) => (
								<JobCard
									key={p.uuid}
									title={p.project_name}
									to={`/jobs/${p.uuid}`}
								/>
							))}
						</Flex>
					</Section>
				</div>
				<Outlet />
			</Flex>
			{isRightSidebarOpen && (
				<AddExpenseModal
					isAddExpenseOpen={isRightSidebarOpen}
					handleAddExpenseClose={handleRightSidebarClose}
					jobScopeId={jobScopeId}
				/>
			)}

			{isOpen && <CreateJobModal isOpen={isOpen} onClose={handleClose} />}
		</JobsProvider>
	);
};
