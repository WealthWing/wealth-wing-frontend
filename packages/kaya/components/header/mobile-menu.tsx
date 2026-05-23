import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { mobileMenuStyles } from './header.styles';
import { MobileMenuProps } from './header.definitions';

export const MobileMenu = ({ links, isOpen, onClose, ctaLabel, ctaHref }: MobileMenuProps) => {
	const { pathname } = useRouter();

	return (
		<div
			id="mobile-menu"
			css={[mobileMenuStyles.panel, isOpen && mobileMenuStyles.panelOpen]}
			aria-hidden={!isOpen}
		>
			<nav css={mobileMenuStyles.navList} aria-label="Mobile Navigation">
				{links.map((link) => {
					const isActive = pathname === link.href;
					return (
						<Link
							key={link.href}
							href={link.href}
							css={[
								mobileMenuStyles.navLink,
								isActive && mobileMenuStyles.navLinkActive
							]}
							aria-current={isActive ? 'page' : undefined}
							onClick={onClose}
						>
							{link.label}
						</Link>
					);
				})}
			</nav>

			<div css={mobileMenuStyles.ctaWrapper}>
				<a href={ctaHref} css={mobileMenuStyles.ctaLink} onClick={onClose}>
					{ctaLabel}
					<span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>
	);
};
