import { BarChart } from '@wealth-wing/tayo';
import { formatUtcDateTime } from '@wealth-wing/utils';
import { Section } from 'components/section';
import { NoData } from 'components/table/table-get-more';
import { useFormContext } from 'react-hook-form';
import { useTransactionsSummaryQuery } from 'redux/transaction-queries';
import {
	SummaryFilters,
	TransactionSummaryCards
} from 'router/transaction/components/transaction-summary-helper';
import { TransactionsFormFields } from 'router/transaction/components/transactions-provider.definitions';

export const TransactionsSummary = () => {
	const { watch } = useFormContext<TransactionsFormFields>();

	const { data, isLoading, isFetching } = useTransactionsSummaryQuery({
		from_date: watch('date.from')?.toISOString(),
		to_date: watch('date.to')?.toISOString()
	});

	const isFetchingOrLoading = isLoading || isFetching;

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
	if (data?.months.length === 0) {
		return (
			<Section title="Summary" sectionTools={<SummaryFilters />}>
				<NoData />
			</Section>
		);
	}
	return (
		<Section title="Summary" sectionTools={<SummaryFilters />}>
			<TransactionSummaryCards data={data?.totals} isLoading={isFetchingOrLoading} />
			<BarChart
				isCurrencyFormat
				isLoading={isFetchingOrLoading}
				css={{ width: '100%', minHeight: '230px' }}
				datasets={[
					{
						label: 'Monthly In',
						data: chartData?.income ?? [],
						borderColor: '#36A2EB',
						backgroundColor: '#9BD0F5'
					},
					{
						label: 'Monthly Out',
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
