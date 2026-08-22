import * as React from 'react';

import { Icon } from '../icon';
import type { ExpandProps } from './expand.definitions';
import { expand } from './expand.styles';

/**
 * A collapsible row with an optional leading icon, title, supporting text, and revealable content.
 */
export const Expand = ({
	children,
	className,
	defaultExpanded = false,
	description,
	icon,
	iconColor = 'primary60',
	isExpanded,
	onExpandedChange,
	title
}: ExpandProps) => {
	const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState(defaultExpanded);
	const contentId = React.useId();
	const expanded = isExpanded ?? uncontrolledExpanded;

	const handleClick = () => {
		const nextExpanded = !expanded;

		if (isExpanded === undefined) {
			setUncontrolledExpanded(nextExpanded);
		}

		onExpandedChange?.(nextExpanded);
	};

	return (
		<section className={className} css={expand.root}>
			<button
				aria-controls={contentId}
				aria-expanded={expanded}
				css={expand.row}
				onClick={handleClick}
				type="button"
			>
				{icon && (
					<span aria-hidden="true" css={expand.iconContainer}>
						<Icon color={iconColor} name={icon} size="s20" />
					</span>
				)}
				<span css={expand.text}>
					<span css={expand.title}>{title}</span>
					{description && <span css={expand.description}>{description}</span>}
				</span>
				<Icon
					aria-hidden="true"
					color="textSecondary"
					name={expanded ? 'chevron-up' : 'chevron-down'}
					size="s20"
				/>
			</button>
			<div aria-hidden={!expanded} css={expand.content(expanded)} id={contentId}>
				<div css={expand.contentInner}>
					<div css={expand.contentPanel}>{children}</div>
				</div>
			</div>
		</section>
	);
};
