import { BarChart, Grid } from '@wealth-wing/tayo';
import { Section } from 'components/section';
import { TransactionsSummaryCard } from 'router/transaction/components/transactions-summary-card';

export const TransactionsSummary = () => {
	return (
		<Section title="Summary">
			<Grid gap="s12" gridTemplateColumns="1fr 1fr 1fr">
				<TransactionsSummaryCard title="Money In" amount="$12.345.67" />
				<TransactionsSummaryCard title="Money Out" amount="$12.345.67" />
				<TransactionsSummaryCard title="Money Median income" amount="$12.345.67" />
			</Grid>
			<BarChart
				css={{ width: '100%', minHeight: '230px' }}
				datasets={[
					{
						label: 'Dataset 1',
						data: [1, 2, 3],
						borderColor: '#36A2EB',
						backgroundColor: '#9BD0F5'
					},
					{
						label: 'Dataset 2',
						data: [4, 5, 6],
						borderColor: '#FF6384',
						backgroundColor: '#FFB1C1'
					}
				]}
				labels={['A', 'B', 'C']}
			/>
		</Section>
	);
};
