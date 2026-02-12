import { Box, Flex, Grid, Heading, Icon, Text } from '@wealth-wing/tayo';
import { formatUSD, formatUtcDateTime } from '@wealth-wing/utils';
import { Section } from 'components/section';
import { SubscriptionResponse, SubscriptionSummaryResponse } from 'data/api-definitions';
import { StatusValue } from 'router/subscription/components/subscription-input';
import { subscriptionsPageStyles } from 'router/subscription/subscriptions-page.styles';

const formatValue = (value: string | number | boolean | null | undefined): string => {
	if (value === null || value === undefined || value === '') return '-';
	if (typeof value === 'boolean') return value ? 'Yes' : 'No';
	return String(value);
};

type SubscriptionSummaryProps = {
	summaryData?: SubscriptionSummaryResponse;
	activeFilter: StatusValue;
	onFilterChange: (status: StatusValue) => void;
	selectedSubscription?: SubscriptionResponse;
};

export const SubscriptionSummary = ({
	activeFilter,
	onFilterChange,
	summaryData,
	selectedSubscription
}: SubscriptionSummaryProps) => {
	const subscriptionDetails = selectedSubscription
		? [
				{ key: 'Amount', value: formatUSD(selectedSubscription.amount) },
				{
					key: 'Billing Frequency',
					value: formatValue(selectedSubscription.billing_frequency)
				},
				{
					key: 'Start Date',
					value: formatUtcDateTime(selectedSubscription.start_date ?? '')
				},
				{
					key: 'Next Billing Date',
					value: formatUtcDateTime(selectedSubscription.next_billing_date ?? '')
				},
				{ key: 'Auto Renew', value: formatValue(selectedSubscription.auto_renew) },
				{ key: 'Status', value: formatValue(selectedSubscription.status) },
				{ key: 'Trial Period', value: formatValue(selectedSubscription.trial_period) },
				{
					key: 'Support Contact',
					value: formatValue(selectedSubscription.support_contact)
				},
				{
					key: 'Website',
					value: selectedSubscription.name || '-',
					link: selectedSubscription.website_url
				},
				{
					key: 'Total Amount Spent',
					value: selectedSubscription.total_amount_spent
						? formatUSD(Number(selectedSubscription.total_amount_spent))
						: '-'
				}
		  ]
		: [];

	return (
		<>
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

			<Section title="Subscription Details" subTitle="Overview of your subscription costs">
				<Flex direction="row" gap="s12" flexFlow="wrap">
					{subscriptionDetails.map((detail) => (
						<Box key={detail.key} css={subscriptionsPageStyles.detailTile}>
							<Text font="sm" color="textSecondary">
								{detail.key}
							</Text>
							{detail.link ? (
								<a
									href={detail.link}
									target="_blank"
									rel="noopener noreferrer"
									css={{ textDecoration: 'none' }}
								>
									<Text font="lg">{detail.value}</Text>
								</a>
							) : (
								<Text font="lg">{detail.value}</Text>
							)}
						</Box>
					))}
				</Flex>
			</Section>
		</>
	);
};
