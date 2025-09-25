import { Heading } from '@wealth-wing/tayo';
import { ContentArea, ContentScroll } from 'components/content-area';
import { HeadingContainer } from 'components/heading-container';
import { PageRightPanel } from 'components/page-right-panel';
import { Transactions } from 'router/transaction/components/transactions';
import {
	TransactionsProvider,
	useTransactions
} from 'router/transaction/components/transactions-provider';
import { TransactionsSummary } from 'router/transaction/components/transactions-summary';

const TransactionPageContent = () => {
	const { isRightPanelOpen, onRightPanelClose, activeTransactionId } = useTransactions();
	return (
		<ContentArea>
			<ContentScroll>
				<TransactionsSummary />
				<Transactions />
			</ContentScroll>

			<PageRightPanel
				id="transaction-details"
				onClose={onRightPanelClose}
				isOpen={isRightPanelOpen}
			>
				<Heading tag="h1" font="h4">
					{activeTransactionId}
				</Heading>
			</PageRightPanel>
		</ContentArea>
	);
};

export const TransactionsPage = () => {
	return (
		<TransactionsProvider>
			<HeadingContainer css={{ display: 'flex', flexDirection: 'row' }}>
				<Heading tag="h1">Transactions</Heading>
			</HeadingContainer>
			<TransactionPageContent />
		</TransactionsProvider>
	);
};
