import { Box, Button, Heading, Text } from '@wealth-wing/tayo';
import { formatUtcDateTime } from '@wealth-wing/utils';
import { HeadingContainer } from 'components/heading-container';
import { Section } from 'components/section';
import React from 'react';
import {
	useGetSubscriptionsQuery,
	useGetSubscriptionSummaryQuery
} from 'redux/subscription-queries';
import { StatusValue } from 'router/subscription/components/subscription-input';
import { SubscriptionsList } from 'router/subscription/components/subscription-list';
import { SubscriptionModal } from 'router/subscription/components/subscription-modal';
import { SubscriptionSummary } from 'router/subscription/components/subscription-summary';
import { SubscriptionTransactions } from 'router/subscription/components/subscription-transactions';
import { useCreateSubscription } from 'router/subscription/hooks/use-create-subscription';
import { subscriptionsPageStyles } from 'router/subscription/subscriptions-page.styles';

export const SubscriptionsPage = () => {
	const [statusFilter, setStatusFilter] = React.useState<StatusValue>('active');

	const { data: subscriptionsData, isLoading } = useGetSubscriptionsQuery();
	const { data: subscriptionSummaryData, isLoading: isSummaryLoading } =
		useGetSubscriptionSummaryQuery();
	const {
		isOpen: isCreateModalOpen,
		onCreateModalOpen,
		onCreateModalClose,
		onCreateSubmit,
		isLoading: isCreating
	} = useCreateSubscription();

	const filteredSubscriptions = React.useMemo(() => {
		return subscriptionsData?.filter((item) => item.status === statusFilter);
	}, [statusFilter, subscriptionsData]);

	const [selectedId, setSelectedId] = React.useState<string | undefined>(
		filteredSubscriptions?.[0]?.uuid
	);

	React.useEffect(() => {
		setSelectedId(filteredSubscriptions?.[0]?.uuid);
	}, [filteredSubscriptions]);

	const selectedSubscription = subscriptionsData?.find((item) => item.uuid === selectedId);

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
					</div>
					<div css={subscriptionsPageStyles.sidebarList}>
						<SubscriptionsList
							items={filteredSubscriptions ?? []}
							selectedId={selectedId}
							onSelect={setSelectedId}
							isLoading={isLoading}
						/>
						<Button
							variant="tertiary"
							format="text"
							size="small"
							onClick={onCreateModalOpen}
						>
							Add New Subscription +
						</Button>
					</div>
				</aside>

				<SubscriptionSummary
					items={filteredSubscriptions ?? []}
					activeFilter={statusFilter}
					onFilterChange={setStatusFilter}
					summaryData={subscriptionSummaryData}
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
								<Text font="md">TBD</Text>
								<Text font="sm" color="textSecondary">
									Next Billing
								</Text>
								<Text font="md">TBD</Text>
							</>
						)}
					</Box>
				</div>

				<div css={subscriptionsPageStyles.table}>
					<Section title="All Transactions">
						<SubscriptionTransactions selectedId={selectedId} />
					</Section>
				</div>
			</div>

			<SubscriptionModal
				isOpen={isCreateModalOpen}
				onClose={onCreateModalClose}
				onSubmit={onCreateSubmit}
				isLoading={isCreating}
			/>
		</>
	);
};
