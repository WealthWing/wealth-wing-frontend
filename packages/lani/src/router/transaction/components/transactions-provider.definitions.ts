import { TransactionRequest, TransactionTypes } from 'data/api-definitions';
import { DateShortcutsKey } from 'router/transaction/components/helpers';

export type TransactionsContextProps = {
	isRightPanelOpen: boolean;
	onRightPanelOpen: (activeRowId: string) => void;
	onRightPanelClose: () => void;
	activeTransactionId: string | null;
	onFilterSelect: (shortCut: DateShortcutsKey, selectedFilter: string) => void;
};

type SortBy = NonNullable<NonNullable<TransactionRequest>['sort_by']>;
type SortOrder = 'asc' | 'desc';

export const sortByOptions: { label: string; value: SortBy }[] = [
	{ label: 'Date', value: 'date' },
	{ label: 'Amount', value: 'amount' },
	{ label: 'Title', value: 'title' },
	{ label: 'Category', value: 'category' }
];

export type TransactionsFormFields = {
	date: {
		from: Date | null;
		to: Date | null;
	};
	selectedFilter: string | null;
	filters: {
		search: string;
		type?: TransactionTypes | 'all';
		sortBy?: { label: string; value: SortBy };
		sortOrder?: SortOrder;
	};
};
