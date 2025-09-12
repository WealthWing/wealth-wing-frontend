import { FloatingPortal } from '@floating-ui/react';
import * as React from 'react';

import { dropdownPanel } from './dropdown-panel.styles';

type DropdownPanelProps = Pick<React.HTMLAttributes<HTMLElement>, 'id'> & {
	children: React.ReactNode;
	className?: string;
};

export const DropdownPanel = React.forwardRef<HTMLDivElement, DropdownPanelProps>(
	({ children, id, className, ...restProps }, ref) => {
		return (
			<FloatingPortal>
				<section
					ref={ref}
					aria-describedby="dropdown-panel-description"
					role="dialog"
					id={id}
					css={dropdownPanel.menu}
					className={className}
					{...restProps}
				>
					{children}
				</section>
			</FloatingPortal>
		);
	}
);
