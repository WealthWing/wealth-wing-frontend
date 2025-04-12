import { Box, Button, Flex, Text } from '@wealth-wing/tayo';
import React from 'react';
import { useJobs } from 'router/jobs/jobs.provider';

export const NoExpenses = ({ jobScopeId }: { jobScopeId: string }) => {
	const { onLeftModalOpen } = useJobs();
	return (
		<Box padding="s20">
			<Flex direction="column" alignItems="center" justifyContent="center">
				<Text>No Expenses Found</Text>
				<Text color="textSecondary">Create your first expense to get started!</Text>
				<Button
					variant="tertiary"
					format="regular"
					onClick={() => onLeftModalOpen(jobScopeId)}
				>
					Add Expense
				</Button>
			</Flex>
		</Box>
	);
};
