import { Box, IconButton, Text } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import {
	Table,
	TableBody,
	TableHeaderRow,
	TableHeaderRowCell,
	TableRow,
	TableRowCell
} from 'components/table/table';
import { NoData } from 'components/table/table-get-more';
import { SubscriptionTransaction } from 'router/subscription/subscriptions-page.data';

type SubscriptionTransactionsProps = {
	transactions: SubscriptionTransaction[];
};

export const SubscriptionTransactions = ({ transactions }: SubscriptionTransactionsProps) => {
	const columnWidths = [220, 140, 160, 80];

	if (transactions.length === 0) {
		return (
			<Box>
				<NoData />
			</Box>
		);
	}

	return (
		<Box maxHeight="400px" overflowX="auto">
			<Table width={columnWidths.reduce((acc, w) => acc + w, 0)}>
				<TableHeaderRow isSticky>
					<TableHeaderRowCell width={columnWidths[0]}>Name</TableHeaderRowCell>
					<TableHeaderRowCell width={columnWidths[1]}>Amount</TableHeaderRowCell>
					<TableHeaderRowCell width={columnWidths[2]}>Date</TableHeaderRowCell>
					<TableHeaderRowCell width={columnWidths[3]}>Action</TableHeaderRowCell>
				</TableHeaderRow>
				<TableBody>
					{transactions.map((transaction) => (
						<TableRow key={transaction.id}>
							<TableRowCell width={columnWidths[0]}>{transaction.name}</TableRowCell>
							<TableRowCell width={columnWidths[1]}>
								<Text color={transaction.amount < 0 ? 'red90' : 'green90'}>
									{formatUSD(transaction.amount)}
								</Text>
							</TableRowCell>
							<TableRowCell width={columnWidths[2]}>{transaction.date}</TableRowCell>
							<TableRowCell width={columnWidths[3]}>
								<IconButton
									variant="tertiary"
									format="text"
									iconName="x"
									label="Remove transaction"
								/>
							</TableRowCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};
