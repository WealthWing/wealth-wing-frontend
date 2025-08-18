import { createProvider, useDisclosureControl } from '@wealth-wing/tayo';
import React from 'react';

type TransactionsContextProps = {
	isRightPanelOpen: boolean;
	onRightPanelOpen: (activeRowId: string) => void;
	onRightPanelClose: () => void;
	activeTransactionId: string | null;
};

const [TransactionsContext, useTransactions] =
	createProvider<TransactionsContextProps>('Transactions');

export { useTransactions };

type TransactionsProviderProps = {
	children: React.ReactNode;
};

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
	const [activeTransactionId, setActiveTransactionId] = React.useState<string | null>(null);
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();

	const handleRightPanelOpen = React.useCallback(
		(activeRowId: string) => {
			handleOpen();
			setActiveTransactionId(activeRowId);
		},
		[handleOpen]
	);

	const context = React.useMemo((): TransactionsContextProps => {
		return {
			isRightPanelOpen: isOpen,
			onRightPanelClose: handleClose,
			onRightPanelOpen: handleRightPanelOpen,
			activeTransactionId
		};
	}, [isOpen, handleClose, handleRightPanelOpen, activeTransactionId]);

	return <TransactionsContext {...context}>{children}</TransactionsContext>;
};
