import { SubscriptionCard } from 'router/subscription/components/subscription-card';
import { subscriptionCard } from 'router/subscription/components/subscription-card.styles';
import { SubscriptionListItem } from 'router/subscription/subscriptions-page.data';

type SubscriptionsListProps = {
	items: SubscriptionListItem[];
	selectedId?: string;
	onSelect: (id: string) => void;
};

export const SubscriptionsList = ({ items, selectedId, onSelect }: SubscriptionsListProps) => {
	return (
		<ul css={subscriptionCard.container}>
			{items.map((item) => (
				<SubscriptionCard
					key={item.id}
					item={item}
					isSelected={selectedId === item.id}
					isEnded={item.status === 'ended'}
					onSelect={onSelect}
				/>
			))}
		</ul>
	);
};
