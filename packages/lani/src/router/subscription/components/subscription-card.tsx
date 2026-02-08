import { Dropdown, Flex, Heading, Icon, IconButton, Menu, MenuItem, Text } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { SubscriptionResponse } from 'data/api-definitions';
import { subscriptionCard } from 'router/subscription/components/subscription-card.styles';

type SubscriptionCardProps = {
	subscriptionDetails: SubscriptionResponse;
	onUpdateModalOpen: (id: string) => void;
	onDeleteClick: (id: string) => void;
};

export const SubscriptionCard = ({
	subscriptionDetails,
	onUpdateModalOpen,
	onDeleteClick
}: SubscriptionCardProps) => (
	<li>
		<div css={subscriptionCard.root}>
			<Flex direction="row" justifyContent="space-between">
				<Flex direction="row" alignItems="center" gap="s8">
					<Icon name="credit-card" size="s20" />
					<Heading tag="h4" font="h6">
						{subscriptionDetails.name}
					</Heading>
				</Flex>
				<Dropdown>
					<IconButton
						format="text"
						variant="tertiary"
						iconName="more-vertical"
						aria-haspopup="true"
						label="Subscription actions"
						iconColor="textPrimary"
					/>
					<Menu>
						<MenuItem onClick={() => onUpdateModalOpen(subscriptionDetails.uuid)}>
							Edit Subscription
						</MenuItem>
						<MenuItem
							onClick={() => {
								onDeleteClick(subscriptionDetails.uuid);
							}}
						>
							Delete Subscription
						</MenuItem>
					</Menu>
				</Dropdown>
			</Flex>

			<Flex direction="column" gap="s12">
				<Flex direction="column" gap="s4">
					<Text font="sm" color="textSecondary">
						Amount
					</Text>
					<Heading tag="h4" font="h5">
						{formatUSD(subscriptionDetails.amount)}
					</Heading>
				</Flex>

				<Flex direction="column" gap="s4">
					<Text font="sm" color="textSecondary">
						Frequency
					</Text>
					<Text font="md">{subscriptionDetails.billing_frequency || 'N/A'}</Text>
				</Flex>

				{subscriptionDetails.next_billing_date && (
					<Flex direction="column" gap="s4">
						<Text font="sm" color="textSecondary">
							Next Billing
						</Text>
						<Text font="md">
							{new Date(subscriptionDetails.next_billing_date).toLocaleDateString()}
						</Text>
					</Flex>
				)}
			</Flex>
		</div>
	</li>
);
