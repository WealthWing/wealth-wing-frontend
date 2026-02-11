import { Box, Button, Heading } from '@wealth-wing/tayo';
import { formatUtcDateTime } from '@wealth-wing/utils';
import { HeadingContainer } from 'components/heading-container';
import { Section } from 'components/section';
import React from 'react';
import {
	useGetSubscriptionsQuery,
	useGetSubscriptionSummaryQuery
} from 'redux/subscription-queries';
import { SubscriptionDetails } from 'router/subscription/components/subscription-details';
import { StatusValue } from 'router/subscription/components/subscription-input';
import { SubscriptionsList } from 'router/subscription/components/subscription-list';
import { SubscriptionModal } from 'router/subscription/components/subscription-modal';
import { SubscriptionSummary } from 'router/subscription/components/subscription-summary';
import { SubscriptionTransactions } from 'router/subscription/components/subscription-transactions';
import { useCreateSubscription } from 'router/subscription/hooks/use-create-subscription';
import { useUpdateSubscription } from 'router/subscription/hooks/use-update-subscription';
import { subscriptionsPageStyles } from 'router/subscription/subscriptions-page.styles';

export const SubscriptionsPage = () => {
	const [statusFilter, setStatusFilter] = React.useState<StatusValue>('active');

	const { data: subscriptionsData, isLoading } = useGetSubscriptionsQuery();
	const { data: subscriptionSummaryData } = useGetSubscriptionSummaryQuery();
	const {
		isOpen: isCreateModalOpen,
		onCreateModalOpen,
		onCreateModalClose,
		onCreateSubmit,
		isLoading: isCreating
	} = useCreateSubscription();

	const {
		isOpen: isUpdateOpen,
		onUpdateModalOpen,
		onUpdateModalClose,
		onUpdateSubmit,
		isLoading: isUpdating
	} = useUpdateSubscription();

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
			{/* ── Left column: sidebar ─────────────────────────── */}
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
						onEditOpen={onUpdateModalOpen}
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

			{/* ── Middle column: sticky filters + scrollable transactions ── */}
			<div css={subscriptionsPageStyles.center}>
				<SubscriptionSummary
					items={filteredSubscriptions ?? []}
					activeFilter={statusFilter}
					onFilterChange={setStatusFilter}
					summaryData={subscriptionSummaryData}
				/>

				<div css={subscriptionsPageStyles.content}>
					<Section title="All Transactions">
						<SubscriptionTransactions selectedId={selectedId} />
					</Section>
				</div>
			</div>

			{/* ── Right column: sticky details ─────────────────── */}
			<div css={subscriptionsPageStyles.details}>
				<Heading tag="h2" font="h5">
					Details
				</Heading>
				<SubscriptionDetails summaryData={subscriptionSummaryData} />
			</div>
		</div>			<SubscriptionModal
				isOpen={isCreateModalOpen}
				onClose={onCreateModalClose}
				onSubmit={onCreateSubmit}
				isLoading={isCreating}
			/>
			<SubscriptionModal
				isOpen={isUpdateOpen}
				onClose={onUpdateModalClose}
				onSubmit={onUpdateSubmit}
				isLoading={isUpdating}
				initialData={selectedSubscription}
			/>
		</>
	);
};
