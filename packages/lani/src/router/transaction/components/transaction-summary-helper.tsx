import { Flex, Grid } from '@wealth-wing/tayo';
import { activeStyle, base } from 'router/transaction/components/transaction-summary-helper.styles';
import { TransactionsSummaryCard } from 'router/transaction/components/transactions-summary-card';

type SummaryFilterButtonProps = {
	label: string;
	active?: boolean;
	onClick?: () => void;
};

export const SummaryFilterButton = ({ label, active, onClick }: SummaryFilterButtonProps) => {
	return (
		<button css={[base, active && activeStyle]} onClick={onClick}>
			{label}
		</button>
	);
};

export const SummaryFilters = () => {
	return (
		<Flex direction="row" alignItems="center" gap="s8">
			<SummaryFilterButton label="3M" active onClick={() => {}} />
			<SummaryFilterButton label="6M" onClick={() => {}} />
			<SummaryFilterButton label="12M" onClick={() => {}} />
		</Flex>
	);
};

export const TransactionSummaryCards = () => (
	<Grid gap="s12" gridTemplateColumns="1fr 1fr 1fr">
		<TransactionsSummaryCard title="Money In" amount="$12.345.67" />
		<TransactionsSummaryCard title="Money Out" amount="$12.345.67" />
		<TransactionsSummaryCard title="Money Median income" amount="$12.345.67" />
	</Grid>
);
