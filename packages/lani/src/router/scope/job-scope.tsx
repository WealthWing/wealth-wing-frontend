import { Box, Flex, Grid, Heading, Text } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { ExpenseResponse, ScopeResponse } from 'data/client-definitions';
import React from 'react';

type JobScopeRowProps = {
	data: ExpenseResponse;
};

export const JobScopeRow = ({ data }: JobScopeRowProps) => {
	return (
		<Box pt="s12" borderRadius="radiusMedium">
			<Grid gridTemplateColumns="1fr auto 100px" gap="s12">
				<Text>{data.title}</Text>
				<Text>{formatUSD(data.amount)}</Text>
			</Grid>
		</Box>
	);
};

type JobScopeProps = {
	data: ScopeResponse;
};

export const JobScope = ({ data }: JobScopeProps) => {
	return (
		<Box
			backgroundColor="cardBackground100"
			padding="s20"
			borderRadius="radiusMedium"
			boxShadow="default100"
		>
			<Grid gridTemplateColumns="1fr auto 100px" gap="s20">
				<Heading tag="h4" font="h5" color="black20">
					{data.scope_name}
				</Heading>
				<Text color="black20">Spent</Text>
			</Grid>
			<Flex gap="s16">
				{/* TODO: Handle List - li */}
				{data.expenses.map((e) => (
					<JobScopeRow key={e.uuid} data={e} />
				))}
			</Flex>
		</Box>
	);
};
