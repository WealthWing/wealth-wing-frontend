import { Button, Heading } from '@wealth-wing/tayo';
import { Section } from 'components/section';
import { api } from 'data/client';

// Task
export const Jobs = () => {
	// console.log({ isLoading, error, data });
	const { data } = api.useQuery('get', '/project/all', {});

	return (
		<div>
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
				{data?.map((p) => (
					<Heading tag="h6">{p.project_name}</Heading>
				))}
			</Section>
		</div>
	);
};
