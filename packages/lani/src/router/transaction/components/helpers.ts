import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, subYears } from 'date-fns';
import { TransactionsFormFields } from 'router/transaction/components/transactions-provider.definitions';

const createDateShortcut = (start: Date, end: Date) => ({
	startDateValue: start,
	endDateValue: end
});

export type DateShortcut = {
	startDateValue: Date;
	endDateValue: Date;
};

export type DateShortcuts = {
	lastMonth: DateShortcut;
	lastThreeMonths: DateShortcut;
	lastSixMonths: DateShortcut;
	lastTwelveMonths: DateShortcut;
	thisYear: DateShortcut;
	lastYear: DateShortcut;
};

export type DateShortcutsKey = keyof DateShortcuts;

export const dateShortcuts = (): DateShortcuts => {
	const today = new Date();

	return {
		lastMonth: createDateShortcut(
			startOfMonth(subMonths(today, 1)),
			endOfMonth(subMonths(today, 1))
		),
		lastThreeMonths: createDateShortcut(startOfMonth(subMonths(today, 2)), endOfMonth(today)),
		lastSixMonths: createDateShortcut(startOfMonth(subMonths(today, 5)), endOfMonth(today)),
		lastTwelveMonths: createDateShortcut(startOfMonth(subMonths(today, 12)), endOfMonth(today)),
		thisYear: createDateShortcut(
			startOfYear(subYears(today, 0)),
			endOfYear(subYears(today, 0))
		),
		lastYear: createDateShortcut(startOfYear(subYears(today, 1)), endOfYear(subYears(today, 1)))
	};
};

type Filter = {
	label: string;
	value: DateShortcutsKey;
};

export const filters: Filter[] = [
	{ label: '3M', value: 'lastThreeMonths' },
	{ label: '6M', value: 'lastSixMonths' },
	{ label: '12M', value: 'lastTwelveMonths' },
	{ label: 'This year (YTD)', value: 'thisYear' },
	{ label: 'Last year', value: 'lastYear' }
];

export const defaultTransactionFormValues: TransactionsFormFields = {
	date: {
		from: dateShortcuts().lastSixMonths.startDateValue,
		to: dateShortcuts().lastSixMonths.endDateValue
	},
	selectedFilter: '6M'
};
