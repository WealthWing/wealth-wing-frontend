export type NavLink = {
	label: string;
	href: string;
};

export type HeaderProps = {
	links?: NavLink[];
	ctaLabel?: string;
	ctaHref?: string;
};

export type MobileMenuProps = {
	links: NavLink[];
	isOpen: boolean;
	onClose: () => void;
	ctaLabel: string;
	ctaHref: string;
	onLinkClick: (href: string) => void;
};

export const DEFAULT_NAV_LINKS: NavLink[] = [
	{ label: 'Work', href: '#work' },
	{ label: 'Process', href: '#process' },
	{ label: 'Contact', href: '#contact' }
];

export const DEFAULT_CTA_LABEL = 'Start the conversation';
export const DEFAULT_CTA_HREF = '#contact';
