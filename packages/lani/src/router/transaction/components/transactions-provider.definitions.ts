import { DateShortcutsKey } from 'router/transaction/components/helpers';

export type TransactionsContextProps = {
	isRightPanelOpen: boolean;
	onRightPanelOpen: (activeRowId: string) => void;
	onRightPanelClose: () => void;
	activeTransactionId: string | null;
	onFilterSelect: (shortCut: DateShortcutsKey, selectedFilter: string) => void;
};

export type TransactionsFormFields = {
	date: {
		from: Date | null;
		to: Date | null;
	};
	selectedFilter: string | null;
};
