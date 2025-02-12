import { Button, Flex, Grid, Heading } from '@wealth-wing/tayo';
import { JobCard } from 'components/job-card';
import { Section } from 'components/section';
import { api } from 'data/client';

// Task
export const Jobs = () => {
	// console.log({ isLoading, error, data });
	const { data } = api.useQuery('get', '/project/all', {});

	return (
		<Flex direction="column" gap="s20">
			<Heading tag="h2">Jobs</Heading>
			<Section
				title="Manage Jobs"
				subTitle="Your Hub for Big Projects: Create, manage, and monitor the jobs that drive your financial goals."
				button={
					<Button variant="tertiary" format="text">
						Create Job
					</Button>
				}
			>
				<Grid gridTemplateColumns="repeat(3, 1fr)" gap="s12">
					{data?.map((p) => (
						<JobCard key={p.uuid} title={p.project_name} to={`/jobs/${p.uuid}`}>
							test
						</JobCard>
					))}
					{data?.map((p) => (
						<JobCard key={p.uuid} title={p.project_name} to={`/jobs/${p.uuid}`}>
							test
						</JobCard>
					))}
				</Grid>
			</Section>
		</Flex>
	);
};
