import { useDisclosureControl } from '@wealth-wing/tayo';

export function useAddExpense() {
	const { isOpen, handleClose, handleOpen } = useDisclosureControl();

	return {
		isOpen,
		onOpen: handleOpen,
		onClose: handleClose
	};
}
