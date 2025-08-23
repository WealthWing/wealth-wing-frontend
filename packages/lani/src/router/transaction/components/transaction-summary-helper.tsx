import { Flex, Grid } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { TransactionSummaryResponse } from 'data/api-definitions';
import { useFormContext } from 'react-hook-form';
import { filters } from 'router/transaction/components/helpers';
import { activeStyle, base } from 'router/transaction/components/transaction-summary-helper.styles';
import { useTransactions } from 'router/transaction/components/transactions-provider';
import { TransactionsFormFields } from 'router/transaction/components/transactions-provider.definitions';
import { TransactionsSummaryCard } from 'router/transaction/components/transactions-summary-card';

type SummaryFilterButtonProps = {
	label: string;
	active?: boolean;
	onClick?: () => void;
};

export const SummaryFilterButton = ({ label, active, onClick }: SummaryFilterButtonProps) => {
	return (
		<button css={[base, active && activeStyle]} onClick={onClick} aria-pressed={active}>
			{label}
		</button>
	);
};

export const SummaryFilters = () => {
	const { onFilterSelect } = useTransactions();
	const { watch } = useFormContext<TransactionsFormFields>();

	const activeFilter = watch('selectedFilter');
	return (
		<Flex direction="row" alignItems="center" gap="s8">
			{filters.map(({ label, value }) => (
				<SummaryFilterButton
					key={label}
					label={label}
					active={activeFilter === label}
					onClick={() => onFilterSelect(value, label)}
				/>
			))}
		</Flex>
	);
};

type TransactionSummaryCardsProps = {
	data?: TransactionSummaryResponse['totals'];
	isLoading?: boolean;
};

export const TransactionSummaryCards = ({ data, isLoading }: TransactionSummaryCardsProps) => {
	if (isLoading) {
		return <div>...LOADING</div>;
	}

	return (
		<Grid gap="s12" gridTemplateColumns="1fr 1fr 1fr 1fr">
			<TransactionsSummaryCard
				title="Money In"
				amount={data ? formatUSD(data.income) : 'N/A'}
			/>
			<TransactionsSummaryCard
				title="Money Out"
				amount={data ? formatUSD(data.expense) : 'N/A'}
			/>
			<TransactionsSummaryCard title="Net" amount={data ? formatUSD(data.net) : 'N/A'} />
			<TransactionsSummaryCard
				title="AVH Spend / MO."
				amount={data ? formatUSD(data.average_monthly_spent) : 'N/A'}
			/>
		</Grid>
	);
};
