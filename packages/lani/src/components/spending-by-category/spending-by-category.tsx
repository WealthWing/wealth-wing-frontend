import {
	Button,
	Expand,
	Heading,
	Icon,
	ProgressBar,
	ScreenReaderOnly,
	SkeletonAreaLoader,
	SkeletonTextLoader,
	Text
} from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { IconLabel } from 'components/icon-label';
import type {
	SpendingByCategoryItem,
	SpendingByCategoryProps
} from 'components/spending-by-category/spending-by-category.definitions';
import { spendingByCategory } from 'components/spending-by-category/spending-by-category.styles';
import * as React from 'react';

const loadingRowCount = 5;
const visibleCategoryCount = 6;

const formatTransactionCount = (transactionCount: number) =>
	`${transactionCount.toLocaleString('en-US')} ${
		transactionCount === 1 ? 'transaction' : 'transactions'
	}`;

const LoadingRows = () => (
	<>
		<ScreenReaderOnly>Loading spending by category</ScreenReaderOnly>
		<div aria-hidden="true">
			{Array.from({ length: loadingRowCount }, (_, index) => (
				<div key={index} css={spendingByCategory.row}>
					<div css={spendingByCategory.loadingCategory}>
						<SkeletonAreaLoader width="2.5rem" height="2.5rem" />
						<div css={spendingByCategory.loadingCategoryText}>
							<SkeletonTextLoader variant="md" width="7.5rem" />
							<SkeletonTextLoader variant="sm" width="5rem" />
						</div>
					</div>
					<SkeletonAreaLoader
						css={spendingByCategory.loadingProgress}
						height="0.5rem"
						width="100%"
					/>
					<div css={spendingByCategory.loadingAmount}>
						<SkeletonTextLoader variant="md" width="5rem" />
					</div>
					<div css={spendingByCategory.loadingPercentage}>
						<SkeletonTextLoader variant="md" width="2.5rem" />
					</div>
				</div>
			))}
		</div>
	</>
);

const EmptyState = () => (
	<div css={spendingByCategory.state}>
		<span css={spendingByCategory.stateIcon} aria-hidden="true">
			<Icon name="shopping-bag" size="s20" />
		</span>
		<Text tag="p" font="lg" fontWeight="semibold">
			No spending by category
		</Text>
		<Text tag="p" font="md" color="textSecondary" css={spendingByCategory.stateDescription}>
			No expense transactions were found for this period.
		</Text>
	</div>
);

const ErrorState = ({ onRetry }: { onRetry?: () => void }) => (
	<div css={spendingByCategory.state} role="alert">
		<span css={spendingByCategory.stateIcon} aria-hidden="true">
			<Icon name="alert-circle" size="s20" />
		</span>
		<Text tag="p" font="lg" fontWeight="semibold">
			We couldn’t load spending by category
		</Text>
		<Text tag="p" font="md" color="textSecondary" css={spendingByCategory.stateDescription}>
			Something went wrong while loading your spending.
		</Text>
		{onRetry ? (
			<Button
				type="button"
				format="outline"
				variant="tertiary"
				size="small"
				css={spendingByCategory.retry}
				onClick={onRetry}
			>
				Try again
			</Button>
		) : null}
	</div>
);

type CategoryRowsProps = {
	categories: readonly SpendingByCategoryItem[];
	totalSpending: number;
};

const CategoryRows = ({ categories, totalSpending }: CategoryRowsProps) => (
	<>
		{categories.map((category) => {
			const percentage = totalSpending
				? (Math.abs(category.expense) / totalSpending) * 100
				: 0;
			const roundedPercentage = Math.round(percentage);

			return (
				<li key={category.category_id} css={spendingByCategory.row}>
					<div css={spendingByCategory.category}>
						<IconLabel
							css={spendingByCategory.categoryLabel}
							iconName="shopping-bag"
							label={category.category}
						/>
						<Text
							tag="span"
							font="sm"
							color="textSecondary"
							css={spendingByCategory.categoryTransactions}
						>
							{formatTransactionCount(category.transaction_count)}
						</Text>
					</div>
					<ProgressBar
						css={spendingByCategory.progress}
						value={percentage}
						aria-label={`${category.category}: ${roundedPercentage}% of spending`}
					/>
					<Text tag="span" font="md" css={spendingByCategory.amount}>
						{formatUSD(Math.abs(category.expense))}
					</Text>
					<Text tag="span" font="md" css={spendingByCategory.percentage}>
						{roundedPercentage}%
					</Text>
				</li>
			);
		})}
	</>
);

export const SpendingByCategory = ({
	className,
	headingTag = 'h2',
	title = 'Spending by category',
	titleId,
	...state
}: SpendingByCategoryProps) => {
	const generatedTitleId = React.useId();
	const [showAllCategories, setShowAllCategories] = React.useState(false);
	const resolvedTitleId = titleId ?? `spending-by-category-${generatedTitleId}`;
	const isBusy = state.status === 'loading' || (state.status === 'ready' && state.isRefreshing);
	const shouldShowSummary =
		state.status === 'ready' && state.data.spending_by_categories.length > 0;

	let content: React.ReactNode;

	if (state.status === 'loading') {
		content = <LoadingRows />;
	} else if (state.status === 'error') {
		content = <ErrorState onRetry={state.onRetry} />;
	} else if (state.data.spending_by_categories.length === 0) {
		content = <EmptyState />;
	} else {
		const totalSpending = Math.abs(state.data.total_spending_by_category);
		const visibleCategories = state.data.spending_by_categories.slice(0, visibleCategoryCount);
		const remainingCategories = state.data.spending_by_categories.slice(visibleCategoryCount);
		const remainingCategoryCount = remainingCategories.length;

		content = (
			<>
				<ul css={spendingByCategory.list}>
					<CategoryRows categories={visibleCategories} totalSpending={totalSpending} />
				</ul>
				{remainingCategoryCount > 0 ? (
					<Expand
						css={spendingByCategory.moreCategories}
						description={`${remainingCategoryCount} additional ${
							remainingCategoryCount === 1 ? 'category' : 'categories'
						}`}
						icon="list"
						isExpanded={showAllCategories}
						onExpandedChange={setShowAllCategories}
						title={showAllCategories ? 'Show fewer categories' : 'Show more categories'}
					>
						<ul css={[spendingByCategory.list, spendingByCategory.expandedList]}>
							<CategoryRows
								categories={remainingCategories}
								totalSpending={totalSpending}
							/>
						</ul>
					</Expand>
				) : null}
			</>
		);
	}

	return (
		<section
			aria-busy={isBusy || undefined}
			aria-labelledby={resolvedTitleId}
			className={className}
			css={spendingByCategory.root}
		>
			<header css={spendingByCategory.header}>
				<Heading id={resolvedTitleId} tag={headingTag} font="h5">
					{title}
				</Heading>
				{state.status === 'loading' ? (
					<div css={spendingByCategory.headerLoading} aria-hidden="true">
						<SkeletonTextLoader variant="sm" width="4.5rem" />
						<SkeletonTextLoader variant="h6" width="9rem" />
					</div>
				) : null}
				{shouldShowSummary && state.status === 'ready' ? (
					<div css={spendingByCategory.headerSummary}>
						<Text tag="span" font="sm" color="textSecondary">
							Total spent
						</Text>
						<div css={spendingByCategory.headerSummaryValue}>
							<Text tag="span" font="h6" fontWeight="semibold">
								{formatUSD(Math.abs(state.data.total_spending_by_category))}
							</Text>
							<Text tag="span" font="sm" color="textSecondary">
								{formatTransactionCount(state.data.transaction_count)}
							</Text>
						</div>
					</div>
				) : null}
			</header>
			{content}
		</section>
	);
};
