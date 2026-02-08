import { SubscriptionResponse } from 'data/api-definitions';
import { SubscriptionCard } from 'router/subscription/components/subscription-card';
import { subscriptionCard } from 'router/subscription/components/subscription-card.styles';

type SubscriptionsListProps = {
	subscriptions: SubscriptionResponse[];
	isLoading: boolean;
	onUpdateModalOpen: (id: string) => void;
	onDeleteClick: (id: string) => void;
};

export const SubscriptionsList = ({
	subscriptions,
	isLoading,
	onUpdateModalOpen,
	onDeleteClick
}: SubscriptionsListProps) => {
	if (isLoading) {
		return <div>LOADING ...</div>;
	}

	return (
		<ul css={subscriptionCard.container}>
			{subscriptions.map((subscription) => (
				<SubscriptionCard
					key={subscription.uuid}
					subscriptionDetails={subscription}
					onUpdateModalOpen={onUpdateModalOpen}
					onDeleteClick={onDeleteClick}
				/>
			))}
		</ul>
	);
};
