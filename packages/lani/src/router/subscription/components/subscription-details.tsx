import { Box, Flex, Heading, Icon, Text } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { SubscriptionSummaryResponse } from 'data/api-definitions';
import { subscriptionDetailsStyles } from 'router/subscription/components/subscription-details.styles';

type SubscriptionDetailsProps = {
	summaryData?: SubscriptionSummaryResponse;
};

export const SubscriptionDetails = ({ summaryData }: SubscriptionDetailsProps) => {
	if (!summaryData) {
		return (
			<Box css={subscriptionDetailsStyles.emptyState}>
				<Text font="md" color="textSecondary">
					Loading subscription details...
				</Text>
			</Box>
		);
	}

	return (
		<Box css={subscriptionDetailsStyles.container}>
			<Box css={subscriptionDetailsStyles.statCard}>
				<Flex direction="row" alignItems="center" gap="s12">
					<Box css={subscriptionDetailsStyles.iconContainer}>
						<Icon name="currency-dollar" size="s24" color="primary60" />
					</Box>
					<Flex direction="column" gap="s4">
						<Text font="sm" color="textSecondary">
							Total Monthly Cost
						</Text>
						<Heading tag="h3" font="h4">
							{formatUSD(summaryData.total_monthly_cost_cents)}
						</Heading>
					</Flex>
				</Flex>
			</Box>

			<Box css={subscriptionDetailsStyles.statCard}>
				<Flex direction="row" alignItems="center" gap="s12">
					<Box css={subscriptionDetailsStyles.iconContainer}>
						<Icon name="square" size="s24" color="textSecondary" />
					</Box>
					<Flex direction="column" gap="s4">
						<Text font="sm" color="textSecondary">
							Total Subscriptions
						</Text>
						<Heading tag="h3" font="h4">
							{summaryData.total_subscriptions_count}
						</Heading>
					</Flex>
				</Flex>
			</Box>

			<Box css={subscriptionDetailsStyles.statCard}>
				<Flex direction="row" alignItems="center" gap="s12">
					<Box css={subscriptionDetailsStyles.iconContainer}>
						<Icon name="check-square" size="s24" color="green100" />
					</Box>
					<Flex direction="column" gap="s4">
						<Text font="sm" color="textSecondary">
							Active
						</Text>
						<Heading tag="h3" font="h4">
							{summaryData.total_active_subscriptions_count}
						</Heading>
					</Flex>
				</Flex>
			</Box>

			<Box css={subscriptionDetailsStyles.statCard}>
				<Flex direction="row" alignItems="center" gap="s12">
					<Box css={subscriptionDetailsStyles.iconContainer}>
						<Icon name="plus" size="s24" color="red100" />
					</Box>
					<Flex direction="column" gap="s4">
						<Text font="sm" color="textSecondary">
							Inactive
						</Text>
						<Heading tag="h3" font="h4">
							{summaryData.total_inactive_subscriptions_count}
						</Heading>
					</Flex>
				</Flex>
			</Box>

			<Box css={subscriptionDetailsStyles.statCard}>
				<Flex direction="row" alignItems="center" gap="s12">
					<Box css={subscriptionDetailsStyles.iconContainer}>
						<Icon name="plus" size="s24" color="yellow100" />
					</Box>
					<Flex direction="column" gap="s4">
						<Text font="sm" color="textSecondary">
							Paused
						</Text>
						<Heading tag="h3" font="h4">
							{summaryData.total_paused_subscriptions_count}
						</Heading>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};
