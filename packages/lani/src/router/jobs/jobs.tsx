import { Button, Flex, Heading, useDisclosureControl } from '@wealth-wing/tayo';
import { container, HeadingContainer } from 'components/heading-container';
import { JobCard } from 'components/job-card';
import { Section } from 'components/section';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGetJobsQuery } from 'redux/job-queries';
import { JobDeletionModal } from 'router/jobs/components/delete-job-modal';
import { JobFormModal } from 'router/jobs/components/job-form-modal';
import { useCreateJob } from 'router/jobs/hooks/use-create-job';
import { useEditJob } from 'router/jobs/hooks/use-edit-job';
import { JobsProvider } from 'router/jobs/jobs.provider';
import { overflowX, stickyContainer } from 'router/jobs/jobs.styles';

export const Jobs = () => {
	const [jobScopeId, setJobScopeId] = React.useState<string>('');
	const createJob = useCreateJob();
	const editJob = useEditJob();
	const {
		isOpen: isJobDeletionModalOpen,
		handleClose: onJobDeletionModalClose,
		handleOpen: onJobDeletionModalOpen
	} = useDisclosureControl();
	const {
		isOpen: isRightSidebarOpen,
		handleOpen: onRightSidebarOpen,
		handleClose: onRightSidebarClose
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
		onRightSidebarOpen();
	};

	return (
		<JobsProvider
			isLeftModalOpen={isRightSidebarOpen}
			onLeftModalClose={onRightSidebarClose}
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
							<Button variant="tertiary" format="text" onClick={createJob.onOpen}>
								Create Job
							</Button>
						}
					>
						<Flex direction="row" gap="s20" css={overflowX}>
							{data?.map((p) => (
								<JobCard
									key={p.uuid}
									title={p.project_name}
									jobStartDate={p.start_date}
									jobEndDate={p.end_date}
									totalSpent={p.total_spent}
									to={`/jobs/${p.uuid}`}
									onEditOpen={editJob.onOpen}
									onDeleteOpen={onJobDeletionModalOpen}
								/>
							))}
						</Flex>
					</Section>
				</div>

				<Outlet />
			</Flex>

			<JobFormModal {...createJob} />
			<JobFormModal variant="edit" {...editJob} />
			<JobDeletionModal isOpen={isJobDeletionModalOpen} onClose={onJobDeletionModalClose} />
		</JobsProvider>
	);
};
