import { createProvider, useDisclosureControl } from '@wealth-wing/tayo';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
	dateShortcuts,
	DateShortcutsKey,
	defaultTransactionFormValues
} from 'router/transaction/components/helpers';
import {
	TransactionsContextProps,
	TransactionsFormFields
} from 'router/transaction/components/transactions-provider.definitions';

const [TransactionsContext, useTransactions] =
	createProvider<TransactionsContextProps>('Transactions');

export { useTransactions };

type TransactionsProviderProps = {
	children: React.ReactNode;
};

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
	const [activeTransactionId, setActiveTransactionId] = React.useState<string | null>(null);
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();
	const form = useForm<TransactionsFormFields>({ defaultValues: defaultTransactionFormValues });

	const handleRightPanelOpen = React.useCallback(
		(activeRowId: string) => {
			handleOpen();
			setActiveTransactionId(activeRowId);
		},
		[handleOpen]
	);

	const handleDateShortcut = React.useCallback(
		(shortCut: DateShortcutsKey, selectedFilter: string) => {
			const filter = dateShortcuts()[shortCut];
			form.setValue('date.from', filter.startDateValue);
			form.setValue('date.to', filter.endDateValue);
			form.setValue('selectedFilter', selectedFilter);
		},
		[form]
	);

	const context = React.useMemo((): TransactionsContextProps => {
		return {
			isRightPanelOpen: isOpen,
			onRightPanelClose: handleClose,
			onRightPanelOpen: handleRightPanelOpen,
			activeTransactionId,
			onFilterSelect: handleDateShortcut
		};
	}, [isOpen, handleClose, handleRightPanelOpen, activeTransactionId, handleDateShortcut]);

	return (
		<TransactionsContext {...context}>
			<FormProvider {...form}>{children}</FormProvider>
		</TransactionsContext>
	);
};
