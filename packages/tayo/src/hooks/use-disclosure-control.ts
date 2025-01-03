import * as React from 'react';

type UseDisclosureControl = {
	onClose?(): void; // Optional callback for when the component is closed
	onOpen?(): void; // Optional callback for when the component is opened
	defaultIsOpen?: boolean;
};

/**
 * A custom hook for managing the open/close (visibility) state of components like modals, accordions, dropdowns, etc.
 * It provides control methods and the current visibility state.
 *
 * @param {UseDisclosureControl} props - The configuration and callbacks for the hook.
 * @returns {Object} The current state of visibility and control methods.
 */

export function useDisclosureControl({
	onClose,
	onOpen,
	defaultIsOpen = false
}: UseDisclosureControl = {}) {
	const [isOpen, setIsOpen] = React.useState(defaultIsOpen);

	const handleClose = React.useCallback(() => {
		setIsOpen(false);

		// Call onClose callback if provided
		onClose?.();
	}, [onClose]);

	const handleOpen = React.useCallback(() => {
		setIsOpen(true);

		// Call onOpen callback if provided
		onOpen?.();
	}, [onOpen]);

	const handleToggle = React.useCallback(() => {
		if (isOpen) {
			handleClose();
		} else {
			handleOpen();
		}
	}, [isOpen, handleOpen, handleClose]);

	return { isOpen, handleOpen, handleClose, handleToggle };
}
