import { SkeletonLoaderContainer, SkeletonTextLoader } from '@wealth-wing/tayo';
import { SubscriptionResponse } from 'data/api-definitions';
import { SubscriptionCard } from 'router/subscription/components/subscription-card';
import { subscriptionCard } from 'router/subscription/components/subscription-card.styles';

type SubscriptionsListProps = {
	items: SubscriptionResponse[];
	selectedId?: string;
	onSelect: (id: string) => void;
	isLoading?: boolean;
	onEditOpen: (id: string) => void;
};

export const SubscriptionsList = ({
	items,
	selectedId,
	onSelect,
	isLoading,
	onEditOpen
}: SubscriptionsListProps) => {
	if (isLoading) {
		return (
			<SkeletonLoaderContainer
				size={5}
				gap="s8"
				renderComponent={(key) => <SkeletonTextLoader key={key} variant="h2" />}
			/>
		);
	}

	return (
		<ul css={subscriptionCard.container}>
			{items.map((item) => (
				<SubscriptionCard
					key={item.uuid}
					item={item}
					isSelected={selectedId === item.uuid}
					isEnded={item.status === 'ended'}
					onSelect={onSelect}
					onEditOpen={onEditOpen}
				/>
			))}
		</ul>
	);
};
