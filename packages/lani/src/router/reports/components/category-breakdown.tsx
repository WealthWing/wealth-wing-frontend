import { Flex, PieChart } from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { Section } from 'components/section';
import { CategoryTable } from 'router/reports/components/category-table';
import { SpendingReportData } from 'router/reports/reports-definitions';
import { reportsPage } from 'router/reports/reports-page.styles';

type CategoryBreakdownProps = {
	data: SpendingReportData;
	isLoading: boolean;
	selectedCategory: string | null;
	onCategorySelect: (category: string | null) => void;
};

export const CategoryBreakdown = ({
	data,
	isLoading,
	selectedCategory,
	onCategorySelect
}: CategoryBreakdownProps) => {
	const chartLabels = data.categories.map((c) => c.category);
	const chartValues = data.categories.map((c) => c.total);
	const chartColors = data.categories.map((c) => c.color);

	return (
		<Flex direction="column" gap="s16">
			<Section
				title="Spending by Category"
				subTitle={`Total: ${formatUSD(data.totalSpending)}`}
			>
				<Flex direction="row" gap="s24" css={{ flexWrap: 'wrap' }}>
					<div css={reportsPage.chartContainer}>
						<PieChart
							isLoading={isLoading}
							labels={chartLabels}
							datasets={[
								{
									label: 'Spending',
									data: chartValues,
									backgroundColor: chartColors,
									borderWidth: 0
								}
							]}
							isCurrencyFormat
							displayLegend
							ariaLabel="Spending by category pie chart"
						/>
					</div>
				</Flex>
			</Section>

			<Section
				title={selectedCategory ? `${selectedCategory} Expenses` : 'All Categories'}
				subTitle={
					selectedCategory
						? 'Click a row again to clear selection'
						: 'Click a row to drill into a category'
				}
			>
				<CategoryTable
					categories={data.categories}
					selectedCategory={selectedCategory}
					onCategorySelect={onCategorySelect}
				/>
			</Section>
		</Flex>
	);
};
