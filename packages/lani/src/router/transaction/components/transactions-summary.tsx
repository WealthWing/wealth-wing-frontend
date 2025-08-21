import { BarChart } from '@wealth-wing/tayo';
import { Section } from 'components/section';
import {
	SummaryFilters,
	TransactionSummaryCards
} from 'router/transaction/components/transaction-summary-helper';

export const TransactionsSummary = () => {
	return (
		<Section title="Summary" sectionTools={<SummaryFilters />}>
			<TransactionSummaryCards />
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
