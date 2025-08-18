import { BarChart, Button, Grid, Heading, useDisclosureControl } from '@wealth-wing/tayo';
import { ContentArea, ContentScroll } from 'components/content-area';
import { HeadingContainer } from 'components/heading-container';
import { Section } from 'components/section';
import { Transactions } from 'router/transaction/components/transactions';
import { TransactionsSummaryCard } from 'router/transaction/components/transactions-summary-card';
import { transactionsPage } from 'router/transaction/transaction-page.styles';

export const TransactionsPage = () => {
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();
	return (
		<>
			<HeadingContainer css={{ display: 'flex', flexDirection: 'row' }}>
				<Heading tag="h1">Transactions</Heading>
				<Button variant="primary" format="outline" onClick={handleOpen}>
					Open
				</Button>
			</HeadingContainer>
			<ContentArea>
				<ContentScroll>
					<Section title="Summary">
						<Grid gap="s12" gridTemplateColumns="1fr 1fr 1fr">
							<TransactionsSummaryCard title="Money In" amount="$12.345.67" />
							<TransactionsSummaryCard title="Money Out" amount="$12.345.67" />
							<TransactionsSummaryCard
								title="Money Median income"
								amount="$12.345.67"
							/>
						</Grid>
						<BarChart
							css={{ width: '100%', minHeight: '200px' }}
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
					<Transactions />
				</ContentScroll>

				{isOpen && (
					<div css={transactionsPage.sideBar}>
						<Button variant="primary" format="outline" onClick={handleClose}>
							Close
						</Button>
						Side Bar
					</div>
				)}
			</ContentArea>
		</>
	);
};
