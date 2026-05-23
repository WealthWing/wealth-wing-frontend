import * as React from 'react';
import Link from 'next/link';
import { Icon, useMediaQueries } from '@wealth-wing/tayo';

import { useSmoothScroll } from '../../hooks';
import { useActiveSection } from '../../hooks';
import { MobileMenu } from './mobile-menu';
import { headerStyles } from './header.styles';
import {
	DEFAULT_AVAILABILITY_LABEL,
	DEFAULT_CTA_HREF,
	DEFAULT_CTA_LABEL,
	DEFAULT_NAV_LINKS,
	HeaderProps
} from './header.definitions';

export const Header = ({
	links = DEFAULT_NAV_LINKS,
	ctaLabel = DEFAULT_CTA_LABEL,
	ctaHref = DEFAULT_CTA_HREF,
	availabilityLabel = DEFAULT_AVAILABILITY_LABEL
}: HeaderProps) => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const { isDesktop, isLaptop } = useMediaQueries();
	const isWideViewport = isDesktop || isLaptop;
	const { scrollToSection } = useSmoothScroll();
	const sectionIds = links.filter((l) => l.href.startsWith('#')).map((l) => l.href.slice(1));
	const activeId = useActiveSection(sectionIds);

	React.useEffect(() => {
		if (isWideViewport) setIsMenuOpen(false);
	}, [isWideViewport]);

	React.useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 16);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	React.useEffect(() => {
		if (!isMenuOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsMenuOpen(false);
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isMenuOpen]);

	return (
		<>
			<header css={[headerStyles.root, isScrolled && headerStyles.scrolled]}>
				<div css={headerStyles.inner}>
					<div css={headerStyles.logoGroup}>
						<Link href="/" css={headerStyles.logo}>
							ED SHAZIMAN
							<span css={headerStyles.logoDot} aria-hidden="true">
								.
							</span>
						</Link>
						<span css={headerStyles.availabilityPill} aria-label="Availability status">
							<span css={headerStyles.availabilityDot} aria-hidden="true" />
							{availabilityLabel}
						</span>
					</div>

					<nav css={headerStyles.nav} aria-label="Main Navigation">
						{links.map((link) => {
							const sectionId = link.href.startsWith('#') ? link.href.slice(1) : null;
							const isActive = sectionId ? activeId === sectionId : false;
							return (
								<Link
									key={link.href}
									href={link.href}
									css={[
										headerStyles.navLink,
										isActive && headerStyles.navLinkActive
									]}
									aria-current={isActive ? 'page' : undefined}
									onClick={(e) => {
										if (link.href.startsWith('#')) {
											e.preventDefault();
											scrollToSection(link.href);
										}
									}}
								>
									{link.label}
								</Link>
							);
						})}
					</nav>

					<div css={headerStyles.actions}>
						<a
							href={ctaHref}
							css={headerStyles.ctaLink}
							onClick={(e) => {
								if (ctaHref.startsWith('#')) {
									e.preventDefault();
									scrollToSection(ctaHref);
								}
							}}
						>
							{ctaLabel}
							<span css={headerStyles.ctaArrow} aria-hidden="true">
								↗
							</span>
						</a>
						<button
							css={headerStyles.menuButton}
							aria-label={
								isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
							}
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
							onClick={() => setIsMenuOpen((prev) => !prev)}
						>
							<Icon name={isMenuOpen ? 'x' : 'menu'} size="s20" aria-hidden />
						</button>
					</div>
				</div>
			</header>

			<MobileMenu
				links={links}
				isOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
				ctaLabel={ctaLabel}
				ctaHref={ctaHref}
				onLinkClick={scrollToSection}
				isScrolled={isScrolled}
			/>
		</>
	);
};
