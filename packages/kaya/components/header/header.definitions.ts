export type NavLink = {
	label: string;
	href: string;
};

export type HeaderProps = {
	links?: NavLink[];
	ctaLabel?: string;
	ctaHref?: string;
	availabilityLabel?: string;
};

export type MobileMenuProps = {
	links: NavLink[];
	isOpen: boolean;
	onClose: () => void;
	ctaLabel: string;
	ctaHref: string;
	onLinkClick: (href: string) => void;
	isScrolled?: boolean;
};

export const DEFAULT_NAV_LINKS: NavLink[] = [
	{ label: 'Capabilities', href: '#work' },
	{ label: 'Operational Process', href: '#process' },
	{ label: 'Contact', href: '#contact' }
];

export const DEFAULT_CTA_LABEL = "Let's Chat";
export const DEFAULT_CTA_HREF = '#contact';
export const DEFAULT_AVAILABILITY_LABEL = 'Available for Contracts';
