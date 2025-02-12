import {
	autoUpdate,
	flip,
	offset,
	Placement,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions
} from '@floating-ui/react';
import React from 'react';

import { useDisclosureControl } from '../hooks/use-disclosure-control';

type DropdownProps = {
	placement?: Placement;
	distance?: number;
	children: React.ReactNode;
};

export const Dropdown = ({ placement, distance = 0, children }: DropdownProps) => {
	const { isOpen, handleToggle } = useDisclosureControl();
	const { refs, context, floatingStyles } = useFloating<HTMLButtonElement>({
		placement,
		open: isOpen,
		onOpenChange: handleToggle,
		middleware: [offset(distance), flip(), shift()],
		whileElementsMounted: autoUpdate
	});

	const click = useClick(context);
	const dismiss = useDismiss(context, {
		outsidePress: true
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

	return (
		<>
			{React.Children.map(children, (child, i) => {
				if (React.isValidElement(child)) {
					if (i === 0) {
						return React.cloneElement(child as React.ReactElement, {
							ref: refs.setReference,
							'aria-expanded': isOpen,
							...getReferenceProps()
						});
					}
					if (i === 1 && isOpen) {
						return React.cloneElement(child as React.ReactElement, {
							ref: refs.setFloating,
							style: {
								...floatingStyles
							},
							...getFloatingProps()
						});
					}
				}
				return null;
			})}
		</>
	);
};
