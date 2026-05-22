import { formatUSD } from '@wealth-wing/utils';
import {
	Table,
	TableBody,
	TableHeaderRow,
	TableHeaderRowCell,
	TableRow,
	TableRowCell
} from 'components/table/table';
import { SpendingCategory } from 'router/reports/reports-definitions';
import { reportsPage } from 'router/reports/reports-page.styles';

type CategoryTableProps = {
	categories: SpendingCategory[];
	selectedCategory: string | null;
	onCategorySelect: (category: string | null) => void;
};

export const CategoryTable = ({
	categories,
	selectedCategory,
	onCategorySelect
}: CategoryTableProps) => {
	const displayedCategories = selectedCategory
		? categories.filter((c) => c.category === selectedCategory)
		: categories;

	const handleRowClick = (category: string) => {
		onCategorySelect(selectedCategory === category ? null : category);
	};

	return (
		<Table width={700}>
			<TableHeaderRow isSticky>
				<TableHeaderRowCell width={40}> </TableHeaderRowCell>
				<TableHeaderRowCell width={160}>Category</TableHeaderRowCell>
				<TableHeaderRowCell width={100}>Transactions</TableHeaderRowCell>
				<TableHeaderRowCell width={140}>Total</TableHeaderRowCell>
				<TableHeaderRowCell width={100}>Share</TableHeaderRowCell>
				<TableHeaderRowCell width={160}>Distribution</TableHeaderRowCell>
			</TableHeaderRow>
			<TableBody>
				{displayedCategories.map((cat) => (
					<TableRow
						key={cat.categoryId}
						isSelected={selectedCategory === cat.category}
						onClick={() => handleRowClick(cat.category)}
					>
						<TableRowCell width={40}>
							<span css={reportsPage.colorDot(cat.color)} />
						</TableRowCell>
						<TableRowCell width={160}>{cat.category}</TableRowCell>
						<TableRowCell width={100}>{cat.count}</TableRowCell>
						<TableRowCell width={140}>{formatUSD(cat.total)}</TableRowCell>
						<TableRowCell width={100}>{cat.percentage.toFixed(1)}%</TableRowCell>
						<TableRowCell width={160}>
							<div css={reportsPage.percentageBar(cat.percentage, cat.color)} />
						</TableRowCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
