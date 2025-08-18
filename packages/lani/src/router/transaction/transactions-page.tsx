import { Button, Heading } from '@wealth-wing/tayo';
import { ContentArea, ContentScroll } from 'components/content-area';
import { HeadingContainer } from 'components/heading-container';
import { Transactions } from 'router/transaction/components/transactions';
import {
	TransactionsProvider,
	useTransactions
} from 'router/transaction/components/transactions-provider';
import { TransactionsSummary } from 'router/transaction/components/transactions-summary';
import { transactionsPage } from 'router/transaction/transaction-page.styles';

const TransactionPageContent = () => {
	const { isRightPanelOpen, onRightPanelClose, activeTransactionId } = useTransactions();
	return (
		<ContentArea>
			<ContentScroll>
				<TransactionsSummary />
				<Transactions />
			</ContentScroll>

			{isRightPanelOpen && (
				<div css={transactionsPage.sideBar}>
					<Button variant="primary" format="outline" onClick={onRightPanelClose}>
						Close
					</Button>
					Side Bar
					<Heading tag="h1" font="h4">
						{activeTransactionId}
					</Heading>
				</div>
			)}
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
