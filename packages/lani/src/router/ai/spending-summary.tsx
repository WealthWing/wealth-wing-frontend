import {
	Expand,
	Icon,
	KeyValue,
	KpiCard,
	Markdown,
	Text,
	useMediaQueries
} from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { TransactionSummaryResponse } from 'data/api-definitions';
import { spendingSummary } from 'router/ai/spending-summary.styles';

type SpendingSummaryProps = {
	answer: string;
	summary: TransactionSummaryResponse;
	titleId: string;
};

const accountTypeLabels: Record<
	TransactionSummaryResponse['included_account_types'][number],
	string
> = {
	CREDIT_CARD: 'Credit cards',
	CHECKING: 'Checking',
	SAVINGS: 'Savings',
	CASH: 'Cash',
	INVESTMENT: 'Investments',
	LOAN: 'Loans',
	OTHER: 'Other'
};

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	day: 'numeric',
	timeZone: 'UTC'
});

const longDateFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	day: 'numeric',
	year: 'numeric',
	timeZone: 'UTC'
});

const parseApiDate = (date: string) => new Date(`${date}T00:00:00Z`);

const formatDateRange = (fromDate: string, toDate: string) => {
	const from = parseApiDate(fromDate);
	const to = parseApiDate(toDate);

	return `${shortDateFormatter.format(from)} – ${longDateFormatter.format(to)}`;
};

const getInclusiveMonthCount = (fromDate: string, toDate: string) => {
	const from = parseApiDate(fromDate);
	const to = parseApiDate(toDate);

	return (
		(to.getUTCFullYear() - from.getUTCFullYear()) * 12 +
		to.getUTCMonth() -
		from.getUTCMonth() +
		1
	);
};

const pluralizeTransactions = (count: number) =>
	`${count.toLocaleString('en-US')} ${count === 1 ? 'transaction' : 'transactions'}`;

export const SpendingSummary = ({ answer, summary, titleId }: SpendingSummaryProps) => {
	const { isMobile } = useMediaQueries();
	const dateRange = formatDateRange(summary.from_date, summary.to_date);
	const accountTypes = summary.included_account_types
		.map((accountType) => accountTypeLabels[accountType])
		.join(' • ');
	const monthCount = getInclusiveMonthCount(summary.from_date, summary.to_date);
	const netActivity = `${summary.net_activity > 0 ? '+' : ''}${formatUSD(summary.net_activity)}`;
	const primaryOrientation = isMobile ? 'vertical' : 'horizontal';
	const primaryIconSize = isMobile ? '3rem' : '4.5rem';
	const details = (
		<>
			<div css={spendingSummary.calculation} aria-label="Net spending calculation">
				<KeyValue
					label="Gross spending"
					textAlign="center"
					value={formatUSD(summary.gross_expense)}
					valueColor="secondary60"
					valueFont={isMobile ? 'md' : 'h6'}
				/>
				<b aria-hidden="true">−</b>
				<KeyValue
					label="Refunds"
					textAlign="center"
					value={formatUSD(summary.refunds)}
					valueColor="secondary60"
					valueFont={isMobile ? 'md' : 'h6'}
				/>
				<b aria-hidden="true">=</b>
				<KeyValue
					label="Net spending"
					textAlign="center"
					value={formatUSD(summary.net_spending)}
					valueFont={isMobile ? 'md' : 'h6'}
				/>
			</div>

			<div css={spendingSummary.averages}>
				<KpiCard
					backgroundColor="transparent"
					gap="s16"
					icon="bar-chart"
					iconBorderColor="primary60"
					iconColor="primary40"
					iconContainerSize="3.25rem"
					iconSize="s24"
					label="Average expense transaction"
					labelColor="secondary40"
					labelFont="sm"
					labelUppercase={false}
					padding="none"
					supportingText={`Based on ${pluralizeTransactions(
						summary.expense_transaction_count
					)}`}
					supportingTextFont="sm"
					value={formatUSD(summary.average_expense)}
					valueFont="h5"
				/>
				<KpiCard
					backgroundColor="transparent"
					gap="s16"
					icon="trending-up"
					iconBorderColor="primary60"
					iconColor="primary40"
					iconContainerSize="3.25rem"
					iconSize="s24"
					label="Average monthly spending"
					labelColor="secondary40"
					labelFont="sm"
					labelUppercase={false}
					padding="none"
					supportingText={`Over ${monthCount} ${monthCount === 1 ? 'month' : 'months'}`}
					supportingTextFont="sm"
					value={formatUSD(summary.average_monthly_spending)}
					valueFont="h5"
				/>
			</div>
		</>
	);

	return (
		<article css={spendingSummary.root} aria-labelledby={titleId}>
			<header css={spendingSummary.header}>
				<span css={spendingSummary.sparkle} aria-hidden="true">
					<Icon name="sparkles" size="s20" />
				</span>
				<div css={spendingSummary.headingContent}>
					<h2 id={titleId} tabIndex={-1} css={spendingSummary.title}>
						Spending summary
					</h2>
					<Text tag="p" font="sm" css={spendingSummary.mobileScope}>
						{dateRange} • {accountTypes}
					</Text>
				</div>
			</header>

			<Markdown css={spendingSummary.answer}>{answer}</Markdown>

			<div css={spendingSummary.panel}>
				<div css={spendingSummary.hero}>
					<KpiCard
						backgroundColor="transparent"
						css={spendingSummary.primaryMetric}
						gap={isMobile ? 's8' : 's16'}
						icon="arrow-down"
						iconBackgroundColor="cardBackground80"
						iconBorderColor="secondary60"
						iconColor="secondary60"
						iconContainerSize={primaryIconSize}
						iconSize={isMobile ? 's24' : 's32'}
						label="Net spending"
						labelColor="secondary40"
						labelFont="md"
						labelUppercase={false}
						orientation={primaryOrientation}
						padding="none"
						supportingText={`after ${formatUSD(summary.refunds)} refunded`}
						supportingTextFont={isMobile ? 'sm' : 'md'}
						value={formatUSD(summary.net_spending)}
						valueFont={isMobile ? 'h5' : 'h2'}
					/>

					<KpiCard
						backgroundColor="transparent"
						css={spendingSummary.primaryMetric}
						gap={isMobile ? 's8' : 's16'}
						icon="arrow-up"
						iconBackgroundColor="cardBackground80"
						iconBorderColor="green60"
						iconColor="green60"
						iconContainerSize={primaryIconSize}
						iconSize={isMobile ? 's24' : 's32'}
						label="Net activity"
						labelColor="green60"
						labelFont="md"
						labelUppercase={false}
						orientation={primaryOrientation}
						padding="none"
						supportingText="Income – spending"
						supportingTextFont={isMobile ? 'sm' : 'md'}
						value={netActivity}
						valueColor="green60"
						valueFont={isMobile ? 'h5' : 'h2'}
					/>

					<div css={spendingSummary.scope}>
						<span>
							<Icon name="calendar" size="s20" aria-hidden="true" />
							{dateRange}
						</span>
						<span>
							<Icon name="credit-card" size="s20" aria-hidden="true" />
							{accountTypes}
						</span>
						<small>
							{summary.included_account_types.length}{' '}
							{summary.included_account_types.length === 1
								? 'account type'
								: 'account types'}{' '}
							included
						</small>
					</div>
				</div>

				<div css={spendingSummary.supportingGrid}>
					<KpiCard
						backgroundColor="transparent"
						css={spendingSummary.supportingMetric}
						gap={isMobile ? 's4' : 's16'}
						icon="shopping-bag"
						iconBackgroundColor="cardBackground80"
						iconBorderColor="secondary60"
						iconColor="secondary80"
						iconContainerBorderRadius="radiusMedium"
						iconContainerSize={isMobile ? '2.25rem' : '3.25rem'}
						iconSize={isMobile ? 's16' : 's20'}
						label="Gross spending"
						labelFont={isMobile ? 'sm' : 'md'}
						labelUppercase={false}
						orientation={primaryOrientation}
						padding="none"
						supportingText={pluralizeTransactions(summary.expense_transaction_count)}
						supportingTextColor="indigo40"
						supportingTextFont="sm"
						value={formatUSD(summary.gross_expense)}
						valueFont={isMobile ? 'lg' : 'h5'}
					/>
					<KpiCard
						backgroundColor="transparent"
						css={spendingSummary.supportingMetric}
						gap={isMobile ? 's4' : 's16'}
						icon="rotate-ccw"
						iconBackgroundColor="cardBackground80"
						iconBorderColor="secondary60"
						iconColor="secondary60"
						iconContainerBorderRadius="radiusMedium"
						iconContainerSize={isMobile ? '2.25rem' : '3.25rem'}
						iconSize={isMobile ? 's16' : 's20'}
						label="Refunds"
						labelFont={isMobile ? 'sm' : 'md'}
						labelUppercase={false}
						orientation={primaryOrientation}
						padding="none"
						supportingText={pluralizeTransactions(summary.refund_transaction_count)}
						supportingTextColor="indigo40"
						supportingTextFont="sm"
						value={formatUSD(summary.refunds)}
						valueFont={isMobile ? 'lg' : 'h5'}
					/>
					<KpiCard
						backgroundColor="transparent"
						css={spendingSummary.supportingMetric}
						gap={isMobile ? 's4' : 's16'}
						icon="money-bill"
						iconBackgroundColor="cardBackground80"
						iconBorderColor="green60"
						iconColor="green60"
						iconContainerBorderRadius="radiusMedium"
						iconContainerSize={isMobile ? '2.25rem' : '3.25rem'}
						iconSize={isMobile ? 's16' : 's20'}
						label="Income"
						labelFont={isMobile ? 'sm' : 'md'}
						labelUppercase={false}
						orientation={primaryOrientation}
						padding="none"
						supportingText={pluralizeTransactions(summary.income_transaction_count)}
						supportingTextColor="indigo40"
						supportingTextFont="sm"
						value={formatUSD(summary.income)}
						valueFont={isMobile ? 'lg' : 'h5'}
					/>
				</div>

				{isMobile ? (
					<Expand
						css={spendingSummary.detailsExpand}
						description="Averages, calculation and more"
						icon="list"
						title="View more details"
					>
						{details}
					</Expand>
				) : (
					<div css={spendingSummary.details}>{details}</div>
				)}
			</div>
		</article>
	);
};
