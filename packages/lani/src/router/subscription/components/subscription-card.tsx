import { Flex, Heading, Text } from '@wealth-wing/tayo';
import { capitalizedFirstLetter } from '@wealth-wing/utils';
import { SubscriptionResponse } from 'data/api-definitions';
import { subscriptionCard } from 'router/subscription/components/subscription-card.styles';

type SubscriptionCardProps = {
	item: SubscriptionResponse;
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
			onClick={() => onSelect(item.uuid)}
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
				</Flex>

				<div css={subscriptionCard.metaRow}>
					<Text font="sm" color="textSecondary">
						Billing Frequency
					</Text>
					<Text font="sm">{capitalizedFirstLetter(item?.billing_frequency ?? '')}</Text>
				</div>
			</div>
		</button>
	</li>
);
