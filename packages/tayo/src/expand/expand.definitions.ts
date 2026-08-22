import type * as React from 'react';

import type { IconName } from '../icon';
import type { Color } from '../theme';

export type ExpandProps = {
	/** Content revealed when the row is expanded. */
	children: React.ReactNode;
	/** Optional class name applied to the outer container. */
	className?: string;
	/** Whether the expand is initially open when it is uncontrolled. */
	defaultExpanded?: boolean;
	/** Supporting text displayed below the title. */
	description?: React.ReactNode;
	/** Optional Tayo icon shown at the start of the row. */
	icon?: IconName;
	/** Color applied to the leading icon. */
	iconColor?: Color;
	/** Controls the expanded state. Provide with onExpandedChange. */
	isExpanded?: boolean;
	/** Called whenever the expanded state changes. */
	onExpandedChange?: (isExpanded: boolean) => void;
	/** Primary text displayed in the expandable row. */
	title: React.ReactNode;
};
