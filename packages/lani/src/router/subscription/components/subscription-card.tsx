import { Flex, Heading, Text } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { subscriptionCard } from 'router/subscription/components/subscription-card.styles';
import { SubscriptionListItem } from 'router/subscription/subscriptions-page.data';

type SubscriptionCardProps = {
	item: SubscriptionListItem;
	isSelected: boolean;
	isEnded: boolean;
	onSelect: (id: string) => void;
};

export const SubscriptionCard = ({
	item,
	isSelected,
	isEnded,
	onSelect
}: SubscriptionCardProps) => (
	<li>
		<button
			css={subscriptionCard.cardButton}
			onClick={() => onSelect(item.id)}
			aria-pressed={isSelected}
		>
			<div
				css={[
					subscriptionCard.root,
					isSelected && subscriptionCard.selected,
					isEnded && subscriptionCard.ended
				]}
			>
				<Flex direction="row" justifyContent="space-between" alignItems="center">
					<Flex direction="row" alignItems="center" gap="s8">
						<Heading tag="h4" font="h6">
							{item.name}
						</Heading>
					</Flex>
					<Text font="sm" color="textSecondary">
						{formatUSD(item.monthlyCost)} / mo
					</Text>
				</Flex>

				<div css={subscriptionCard.metaRow}>
					<Text font="sm" color="textSecondary">
						Next Billing
					</Text>
					<Text font="sm">{item.nextBillingLabel}</Text>
				</div>
			</div>
		</button>
	</li>
);
