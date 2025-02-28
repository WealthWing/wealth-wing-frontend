import { css } from '@emotion/react';
import { Button, Flex, Heading, useDisclosureControl } from '@wealth-wing/tayo';
import { HeadingContainer } from 'components/heading-container';
import { JobCard } from 'components/job-card';
import { Section } from 'components/section';
import { Outlet } from 'react-router-dom';
import { useGetJobsQuery } from 'redux/job-queries';
import { CreateJobModal } from 'router/jobs/components/create-job-modal';

const overflowX = css`
	overflow-x: auto;
`;

// Task
export const Jobs = () => {
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();
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

	return (
		<>
			<Flex direction="column" gap="s20">
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
							<JobCard key={p.uuid} title={p.project_name} to={`/jobs/${p.uuid}`} />
						))}
					</Flex>
				</Section>
				<Outlet />
			</Flex>

			{isOpen && <CreateJobModal isOpen={isOpen} onClose={handleClose} />}
		</>
	);
};
