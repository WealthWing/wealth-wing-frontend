import * as React from 'react';
import Link from 'next/link';

import { useActiveSection } from '../../hooks';
import { mobileMenuStyles } from './header.styles';
import { MobileMenuProps } from './header.definitions';

export const MobileMenu = ({
	links,
	isOpen,
	onClose,
	ctaLabel,
	ctaHref,
	onLinkClick,
	isScrolled
}: MobileMenuProps) => {
	const sectionIds = links.filter((l) => l.href.startsWith('#')).map((l) => l.href.slice(1));
	const activeId = useActiveSection(sectionIds);

	return (
		<div
			id="mobile-menu"
			css={[
				mobileMenuStyles.panel,
				isOpen && mobileMenuStyles.panelOpen,
				isScrolled && mobileMenuStyles.panelScrolled
			]}
			aria-hidden={!isOpen}
		>
			<nav css={mobileMenuStyles.navList} aria-label="Mobile Navigation">
				{links.map((link) => {
					const sectionId = link.href.startsWith('#') ? link.href.slice(1) : null;
					const isActive = sectionId ? activeId === sectionId : false;
					return (
						<Link
							key={link.href}
							href={link.href}
							css={[
								mobileMenuStyles.navLink,
								isActive && mobileMenuStyles.navLinkActive
							]}
							aria-current={isActive ? 'page' : undefined}
							onClick={(e) => {
								if (link.href.startsWith('#')) {
									e.preventDefault();
									onLinkClick(link.href);
								}
								onClose();
							}}
						>
							{link.label}
						</Link>
					);
				})}
			</nav>

			<div css={mobileMenuStyles.ctaWrapper}>
				<a
					href={ctaHref}
					css={mobileMenuStyles.ctaLink}
					onClick={(e) => {
						if (ctaHref.startsWith('#')) {
							e.preventDefault();
							onLinkClick(ctaHref);
						}
						onClose();
					}}
				>
					{ctaLabel}
					<span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>
	);
};
