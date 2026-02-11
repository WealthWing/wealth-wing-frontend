import { Box, Flex, Grid, Heading, Icon, Text } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { Section } from 'components/section';
import { SubscriptionResponse, SubscriptionSummaryResponse } from 'data/api-definitions';
import { StatusValue } from 'router/subscription/components/subscription-input';
import { subscriptionsPageStyles } from 'router/subscription/subscriptions-page.styles';

type SubscriptionSummaryProps = {
	summaryData?: SubscriptionSummaryResponse;
	items: SubscriptionResponse[];
	activeFilter: StatusValue;
	onFilterChange: (status: StatusValue) => void;
};

export const SubscriptionSummary = ({
	items,
	activeFilter,
	onFilterChange,
	summaryData
}: SubscriptionSummaryProps) => {
	const activeItems = items.filter((item) => item.status === 'active');

	const activeMonthlyTotal = activeItems.reduce((total, item) => total + item.amount, 0);
	const averageCost = activeItems.length ? activeMonthlyTotal / activeItems.length : 0;
	const annualTotal = activeMonthlyTotal * 12;

	return (
		<>
			{/* ── Sticky filter buttons ────────────────────────── */}
			<div css={subscriptionsPageStyles.filters}>
				<Grid gap="s12" gridTemplateColumns="1fr 1fr">
					<button
						css={[
							subscriptionsPageStyles.summaryTile,
							subscriptionsPageStyles.summaryTileButton,
							activeFilter === 'active' && subscriptionsPageStyles.summaryTileActive
						]}
						onClick={() => onFilterChange('active')}
						aria-pressed={activeFilter === 'active'}
					>
						<Flex direction="column" alignItems="flex-start" gap="s4">
							<Icon
								name={activeFilter === 'active' ? 'check-square' : 'square'}
								size="s40"
								color="green100"
							/>
							<Text font="sm" color="textSecondary">
								Active Subscriptions
							</Text>
						</Flex>
						<Heading tag="h3" font="h2">
							{summaryData?.total_active_subscriptions_count}
						</Heading>
					</button>

					<button
						css={[
							subscriptionsPageStyles.summaryTile,
							subscriptionsPageStyles.summaryTileButton,
							activeFilter === 'cancelled' &&
								subscriptionsPageStyles.summaryTileActive
						]}
						onClick={() => onFilterChange('cancelled')}
						aria-pressed={activeFilter === 'cancelled'}
					>
						<Flex direction="column" alignItems="flex-start" gap="s4">
							<Icon
								name={activeFilter === 'cancelled' ? 'check-square' : 'square'}
								size="s40"
								color="red100"
							/>
							<Text font="sm" color="textSecondary">
								Ended Subscriptions
							</Text>
						</Flex>
						<Heading tag="h3" font="h2">
							{summaryData?.total_inactive_subscriptions_count}
						</Heading>
					</button>
				</Grid>
			</div>

			{/* ── Subscription cost overview (scrolls with content) ── */}
			<Section title="Subscription Details" subTitle="Overview of your subscription costs">
				<Grid gap="s20" gridTemplateColumns="1fr 1fr">
					<Box css={subscriptionsPageStyles.summaryTile}>
						<Flex direction="row" justifyContent="space-between" alignItems="center">
							<Icon name="currency-dollar" size="s24" />
							<Heading tag="h3" font="h4">
								{formatUSD(activeMonthlyTotal)}
							</Heading>
						</Flex>
						<Text font="sm" color="textSecondary">
							Total Monthly Cost
						</Text>
					</Box>

					<Box css={subscriptionsPageStyles.summaryTile}>
						<Flex direction="row" justifyContent="space-between" alignItems="center">
							<Icon name="money-bill" size="s24" />
							<Heading tag="h3" font="h4">
								{formatUSD(averageCost)}
							</Heading>
						</Flex>
						<Text font="sm" color="textSecondary">
							Next Billing Date
						</Text>
					</Box>

					<Box css={subscriptionsPageStyles.summaryTile}>
						<Flex direction="row" justifyContent="space-between" alignItems="center">
							<Icon name="money-bill" size="s24" />
							<Heading tag="h3" font="h4">
								{formatUSD(annualTotal)}
							</Heading>
						</Flex>
						<Text font="sm" color="textSecondary">
							Annual Cost (This Year)
						</Text>
					</Box>

					<Box css={subscriptionsPageStyles.summaryTile}>
						<Flex direction="row" justifyContent="space-between" alignItems="center">
							<Icon name="money-bill" size="s24" />
							<Heading tag="h3" font="h4">
								{formatUSD(annualTotal)}
							</Heading>
						</Flex>
						<Text font="sm" color="textSecondary">
							Last Charge
						</Text>
					</Box>
				</Grid>
			</Section>
		</>
	);
};
