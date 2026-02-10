import { Box, Button, Heading, Text } from '@wealth-wing/tayo';
import { formatUSD, formatUtcDateTime } from '@wealth-wing/utils';
import { HeadingContainer } from 'components/heading-container';
import { Section } from 'components/section';
import React from 'react';
import { SubscriptionsList } from 'router/subscription/components/subscription-list';
import { SubscriptionSummary } from 'router/subscription/components/subscription-summary';
import { SubscriptionTransactions } from 'router/subscription/components/subscription-transactions';
import {
	subscriptions,
	SubscriptionStatus,
	transactionsBySubscriptionId
} from 'router/subscription/subscriptions-page.data';
import { subscriptionsPageStyles } from 'router/subscription/subscriptions-page.styles';

export const SubscriptionsPage = () => {
	const [statusFilter, setStatusFilter] = React.useState<SubscriptionStatus>('active');
	const filteredSubscriptions = React.useMemo(() => {
		return subscriptions.filter((item) => item.status === statusFilter);
	}, [statusFilter]);

	const [selectedId, setSelectedId] = React.useState<string | undefined>(
		filteredSubscriptions[0]?.id
	);

	React.useEffect(() => {
		setSelectedId(filteredSubscriptions[0]?.id);
	}, [filteredSubscriptions]);

	const selectedSubscription = subscriptions.find((item) => item.id === selectedId);
	const transactions = selectedId ? transactionsBySubscriptionId[selectedId] ?? [] : [];

	return (
		<>
			<HeadingContainer
				css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
			>
				<Heading tag="h1">Subscriptions and Memberships</Heading>
				<Box padding="s20" backgroundColor="cardBackground60" borderRadius="radiusXLarge">
					{formatUtcDateTime(new Date().toISOString(), { dateFormat: 'month-day-year' })}
				</Box>
			</HeadingContainer>

			<div css={subscriptionsPageStyles.layout}>
				<aside css={subscriptionsPageStyles.sidebar}>
					<div css={subscriptionsPageStyles.sidebarHeader}>
						<Heading tag="h2" font="h5">
							Subscriptions
						</Heading>
						{/* <Button variant="tertiary" format="text" size="small">
							Add New Subscription +
						</Button> */}
					</div>
					<div css={subscriptionsPageStyles.sidebarList}>
						<SubscriptionsList
							items={filteredSubscriptions}
							selectedId={selectedId}
							onSelect={setSelectedId}
						/>
					</div>
				</aside>

				<SubscriptionSummary
					items={subscriptions}
					activeFilter={statusFilter}
					onFilterChange={setStatusFilter}
				/>

				<div css={subscriptionsPageStyles.details}>
					<Heading tag="h2" font="h5">
						Details
					</Heading>
					<Box css={[subscriptionsPageStyles.detailsBody, { marginTop: '12px' }]}>
						{!selectedSubscription && (
							<Text font="md" color="textSecondary">
								Select a subscription to see details.
							</Text>
						)}
						{selectedSubscription && (
							<>
								<Text font="sm" color="textSecondary">
									Name
								</Text>
								<Heading tag="h3" font="h5">
									{selectedSubscription.name}
								</Heading>
								<Text font="sm" color="textSecondary">
									Status
								</Text>
								<Text font="md">
									{selectedSubscription.status === 'active' ? 'Active' : 'Ended'}
								</Text>
								<Text font="sm" color="textSecondary">
									Monthly Cost
								</Text>
								<Text font="md">{formatUSD(selectedSubscription.monthlyCost)}</Text>
								<Text font="sm" color="textSecondary">
									Next Billing
								</Text>
								<Text font="md">{selectedSubscription.nextBillingLabel}</Text>
							</>
						)}
					</Box>
				</div>

				<div css={subscriptionsPageStyles.table}>
					<Section title="All Transactions">
						<SubscriptionTransactions transactions={transactions} />
					</Section>
				</div>
			</div>
		</>
	);
};
