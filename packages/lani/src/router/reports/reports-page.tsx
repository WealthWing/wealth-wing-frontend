import { Flex, Heading } from '@wealth-wing/tayo';
import { ContentArea, ContentScroll } from 'components/content-area';
import { HeadingContainer } from 'components/heading-container';
import { endOfMonth, startOfMonth, subMonths } from 'date-fns';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountFilter } from 'router/reports/components/account-filter';
import { CategoryBreakdown } from 'router/reports/components/category-breakdown';
import { ReportsFilters } from 'router/reports/components/reports-filters';
import { useSpendingReport } from 'router/reports/hooks/use-spending-report';
import { ReportsFormFields } from 'router/reports/reports-definitions';
import { dateShortcuts, DateShortcutsKey } from 'router/transaction/components/helpers';

const defaultValues: ReportsFormFields = {
	date: {
		from: startOfMonth(subMonths(new Date(), 3)),
		to: endOfMonth(subMonths(new Date(), 1))
	},
	selectedFilter: '3M',
	selectedAccountId: null,
	selectedCategory: null
};

const ReportsPageContent = () => {
	const form = useForm<ReportsFormFields>({ defaultValues });
	const selectedAccountId = form.watch('selectedAccountId');
	const selectedCategory = form.watch('selectedCategory');
	const { data, isLoading } = useSpendingReport(selectedAccountId);

	const handleFilterSelect = React.useCallback(
		(shortcut: string, label: string) => {
			const shortcuts = dateShortcuts();
			const filter = shortcuts[shortcut as DateShortcutsKey];
			if (filter) {
				form.setValue('date.from', filter.startDateValue);
				form.setValue('date.to', filter.endDateValue);
				form.setValue('selectedFilter', label);
			}
		},
		[form]
	);

	const handleAccountChange = React.useCallback(
		(accountId: string | null) => {
			form.setValue('selectedAccountId', accountId);
			form.setValue('selectedCategory', null);
		},
		[form]
	);

	const handleCategorySelect = React.useCallback(
		(category: string | null) => {
			form.setValue('selectedCategory', category);
		},
		[form]
	);

	return (
		<FormProvider {...form}>
			<HeadingContainer>
				<Flex direction="row" justifyContent="space-between" alignItems="center">
					<Heading tag="h1">Reports</Heading>
					<AccountFilter
						selectedAccountId={selectedAccountId}
						onAccountChange={handleAccountChange}
					/>
				</Flex>
			</HeadingContainer>
			<ContentArea>
				<ContentScroll>
					<Flex direction="column" gap="s8">
						<ReportsFilters onFilterSelect={handleFilterSelect} />
					</Flex>
					<CategoryBreakdown
						data={data}
						isLoading={isLoading}
						selectedCategory={selectedCategory}
						onCategorySelect={handleCategorySelect}
					/>
				</ContentScroll>
			</ContentArea>
		</FormProvider>
	);
};

export const ReportsPage = () => {
	return <ReportsPageContent />;
};
