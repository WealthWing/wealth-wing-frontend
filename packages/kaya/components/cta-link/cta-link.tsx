import * as React from 'react';
import { Icon } from '@wealth-wing/tayo';

import { useSmoothScroll } from '../../hooks';
import { CtaLinkProps } from './cta-link.definitions';
import { ctaLinkStyles } from './cta-link.styles';

export const CtaLink = ({
	children,
	iconName = 'arrow-up-right',
	iconSize = 's16',
	css,
	...rest
}: CtaLinkProps) => {
	const { scrollToSection } = useSmoothScroll();

	if (rest.as === 'button') {
		const { as: _as, ...buttonRest } = rest;
		return (
			<button type="button" css={[ctaLinkStyles.root, css]} {...buttonRest}>
				{children}
				<span css={ctaLinkStyles.icon} aria-hidden="true">
					<Icon name={iconName} size={iconSize} aria-hidden="true" />
				</span>
			</button>
		);
	}

	const { as: _as, href, onClick, ...anchorRest } = rest;

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		onClick?.(event);
		if (event.defaultPrevented) return;

		if (href.startsWith('#')) {
			event.preventDefault();
			scrollToSection(href);
		}
	};

	return (
		<a href={href} css={[ctaLinkStyles.root, css]} onClick={handleClick} {...anchorRest}>
			{children}
			<span css={ctaLinkStyles.icon} aria-hidden="true">
				<Icon name={iconName} size={iconSize} aria-hidden="true" />
			</span>
		</a>
	);
};
