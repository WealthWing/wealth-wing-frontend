import { Button, Flex, Grid, Heading, useDisclosureControl } from '@wealth-wing/tayo';
import { JobCard } from 'components/job-card';
import { Section } from 'components/section';
import { useGetJobsQuery } from 'redux/job-queries';
import { CreateJobModal } from 'router/jobs/components/create-job-modal';
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
				<Heading tag="h2">Jobs</Heading>
				<Section
					title="Manage Jobs"
					subTitle="Your Hub for Big Projects: Create, manage, and monitor the jobs that drive your financial goals."
					button={
						<Button variant="tertiary" format="text" onClick={handleOpen}>
							Create Job
						</Button>
					}
				>
					<Grid gridTemplateColumns="repeat(3, 1fr)" gap="s12">
						{data?.map((p) => (
							<JobCard key={p.uuid} title={p.project_name} to={`/jobs/${p.uuid}`} />
						))}
					</Grid>
				</Section>
			</Flex>

			{isOpen && <CreateJobModal isOpen={isOpen} onClose={handleClose} />}
		</>
	);
};
