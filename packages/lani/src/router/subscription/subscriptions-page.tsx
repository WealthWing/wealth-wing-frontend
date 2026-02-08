import { Button, Heading } from '@wealth-wing/tayo';
import { HeadingContainer } from 'components/heading-container';
import { NoFound } from 'components/no-found';
import { Section } from 'components/section';
import { useGetSubscriptionsQuery } from 'redux/subscription-queries';
import { SubscriptionsList } from 'router/subscription/components/subscription-list';
import { SubscriptionModal } from 'router/subscription/components/subscription-modal';
import { useCreateSubscription } from 'router/subscription/hooks/use-create-subscription';
import { useDeleteSubscription } from 'router/subscription/hooks/use-delete-subscription';
import { useUpdateSubscription } from 'router/subscription/hooks/use-update-subscription';

export const SubscriptionsPage = () => {
	const { onCreateModalOpen, ...createModalRest } = useCreateSubscription();
	const { onUpdateModalOpen, ...updateModalRest } = useUpdateSubscription();
	const { onDelete } = useDeleteSubscription();

	const { data, isLoading, isFetching } = useGetSubscriptionsQuery();

	const isLoadingOrFetching = isLoading || isFetching;
	const isEmpty = !isLoadingOrFetching && data?.length === 0;

	return (
		<>
			<HeadingContainer>
				<Heading tag="h1">Subscriptions</Heading>
			</HeadingContainer>
			<Section
				title="Active Subscriptions"
				sectionTools={
					<Button
						variant="tertiary"
						format="text"
						size="small"
						onClick={onCreateModalOpen}
					>
						Add Subscription
					</Button>
				}
			>
				{isEmpty && (
					<NoFound
						title="No subscriptions"
						subtitle="Add your first subscription to track recurring payments!"
					/>
				)}
				{!isEmpty && (
					<SubscriptionsList
						subscriptions={data || []}
						isLoading={isLoadingOrFetching}
						onUpdateModalOpen={onUpdateModalOpen}
						onDeleteClick={onDelete}
					/>
				)}
			</Section>

			<SubscriptionModal
				isOpen={createModalRest.isOpen}
				onClose={createModalRest.onCreateModalClose}
				onSubmit={createModalRest.onCreateSubmit}
				isLoading={createModalRest.isLoading}
			/>

			{updateModalRest.selectedId && (
				<SubscriptionModal
					isOpen={updateModalRest.isOpen}
					onClose={updateModalRest.onUpdateModalClose}
					onSubmit={updateModalRest.onUpdateSubmit}
					isLoading={updateModalRest.isLoading}
					initialData={updateModalRest.selectedSubscription || undefined}
				/>
			)}
		</>
	);
};
