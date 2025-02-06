import { Box, Flex, Heading } from '@wealth-wing/tayo';
import { api } from 'data/client';

// Task
export const Jobs = () => {
	//console.log({ isLoading, error, data });
	const { data, isSuccess } = api.useQuery('get', '/project/all', {});
	console.log(data);
	return (
		<div>
			<Heading tag="h2">Jobs</Heading>
			{data?.map((p) => (
				<Heading tag="h6">{p.project_name}</Heading>
			))}
		</div>
	);
};
