import { BarChart } from '@wealth-wing/tayo';
import { formatUtcDateTime } from '@wealth-wing/utils';
import { Section } from 'components/section';
import { useFormContext } from 'react-hook-form';
import { useTransactionsSummaryQuery } from 'redux/transaction-queries';
import {
	SummaryFilters,
	TransactionSummaryCards
} from 'router/transaction/components/transaction-summary-helper';
import { TransactionsFormFields } from 'router/transaction/components/transactions-provider.definitions';

export const TransactionsSummary = () => {
	const { watch } = useFormContext<TransactionsFormFields>();

	const { data, isLoading } = useTransactionsSummaryQuery({
		from_date: watch('date.from')?.toISOString(),
		to_date: watch('date.to')?.toISOString()
	});

	const chartData = data?.months.reduce<{
		expense: number[];
		income: number[];
		months: string[];
	}>(
		(acc, o) => {
			return {
				expense: [...acc.expense, Math.abs(o.expense)],
				income: [...acc.income, Math.abs(o.income)],
				months: [
					...acc.months,
					formatUtcDateTime(o.month, { isLocalTime: true, dateFormat: 'month' })
				]
			};
		},
		{ expense: [], income: [], months: [] }
	);

	return (
		<Section title="Summary" sectionTools={<SummaryFilters />}>
			<TransactionSummaryCards data={data?.totals} isLoading={isLoading} />
			<BarChart
				isCurrencyFormat
				css={{ width: '100%', minHeight: '230px' }}
				datasets={[
					{
						label: 'Dataset 1',
						data: chartData?.income ?? [],
						borderColor: '#36A2EB',
						backgroundColor: '#9BD0F5'
					},
					{
						label: 'Dataset 2',
						data: chartData?.expense ?? [],
						borderColor: '#FF6384',
						backgroundColor: '#FFB1C1'
					}
				]}
				labels={chartData?.months}
			/>
		</Section>
	);
};
