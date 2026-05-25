import { TransactionResponse } from 'data/api-definitions';
import React from 'react';
import {
	categoryColors,
	dummyTransactions,
	fallbackColor,
	SpendingCategory,
	SpendingReportData
} from 'router/reports/reports-definitions';

/**
 * Aggregates transactions into spending-by-category data.
 *
 * TODO: Replace `dummyTransactions` with a real RTK Query hook
 * once the BE provides a `/transaction/spending-by-category` endpoint.
 * The hook signature should stay the same so the UI doesn't need changes.
 */
export const useSpendingReport = (
	accountFilter: string | null
): { data: SpendingReportData; isLoading: boolean } => {
	const isLoading = false; // Will become real loading state with RTK Query

	const data = React.useMemo(() => {
		const filtered = dummyTransactions
			.filter((t): t is TransactionResponse & { type: string } => t.type === 'expense')
			.filter((t) => {
				if (!accountFilter) return true;
				return t.account_name === getLabelForAccount(accountFilter);
			});

		const grouped = filtered.reduce<
			Record<string, { total: number; count: number; categoryId: string }>
		>((acc, t) => {
			const category = t.category || 'Uncategorized';
			if (!acc[category]) {
				acc[category] = { total: 0, count: 0, categoryId: t.category_id };
			}
			acc[category].total += Math.abs(t.amount);
			acc[category].count += 1;
			return acc;
		}, {});

		const totalSpending = Object.values(grouped).reduce((sum, g) => sum + g.total, 0);

		const categories: SpendingCategory[] = Object.entries(grouped)
			.map(([category, { total, count, categoryId }]) => ({
				category,
				categoryId,
				total,
				count,
				percentage: totalSpending > 0 ? (total / totalSpending) * 100 : 0,
				color: categoryColors[category] || fallbackColor
			}))
			.sort((a, b) => b.total - a.total);

		return { categories, totalSpending };
	}, [accountFilter]);

	return { data, isLoading };
};

/** Maps filter value back to account display name (dummy mapping) */
const getLabelForAccount = (value: string): string => {
	const map: Record<string, string> = {
		'chase-sapphire': 'Chase Sapphire',
		'wells-fargo-checking': 'Wells Fargo Checking'
	};
	return map[value] || value;
};
