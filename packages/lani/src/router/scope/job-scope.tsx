import { Box, Button, Flex, Grid, Heading, Text, theme } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { ExpenseResponse, ScopeResponse } from 'data/api-definitions';

const JobScopeFooter = () => {
	return (
		<Flex direction="row" justifyContent="space-between" alignItems="center">
			<Button variant="tertiary" format="text">
				Add Expense
			</Button>
			<Text font="lg" color="textSecondary">
				Total Spent: $0.00
			</Text>
		</Flex>
	);
};

type JobScopeRowProps = {
	data: ExpenseResponse;
};

export const JobScopeRow = ({ data }: JobScopeRowProps) => {
	return (
		<Box
			pt="s4"
			pb="s4"
			css={{
				borderBottom: `${theme.border.default}`
			}}
		>
			<Grid gridTemplateColumns="1fr auto 100px" gap="s12" css={{ padding: '' }}>
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
			css={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px'
			}}
		>
			<Grid gridTemplateColumns="1fr auto 100px" gap="s20">
				<Heading tag="h4" font="h5" color="black20">
					{data.scope_name}
				</Heading>
				<Text color="black20">Spent</Text>
			</Grid>
			{data.expenses.length > 0 ? (
				<Flex gap="s16">
					{/* TODO: Handle List - li */}
					{data.expenses.map((e) => (
						<JobScopeRow key={e.uuid} data={e} />
					))}
				</Flex>
			) : null}
			<JobScopeFooter />
		</Box>
	);
};
