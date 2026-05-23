export type HeadlinePart = {
	text: string;
	accent: boolean;
};

export const CTA_HEADLINE_PARTS: HeadlinePart[] = [
	{ text: 'Ready to get something ', accent: false },
	{ text: 'built', accent: true },
	{ text: ', ', accent: false },
	{ text: 'fixed', accent: true },
	{ text: ', or ', accent: false },
	{ text: 'modernized', accent: true },
	{ text: '?', accent: false }
];

export const CTA_SUBTEXT =
	"Let's talk about your project. No pressure—just a quick chat to see if we're a good fit.";

export const CTA_BUTTON_LABEL = 'Start the conversation';
export const CTA_BUTTON_HREF = 'mailto:hello@edshaziman.com?subject=Project%20Inquiry';

export const AVAILABILITY_LABEL = 'Available for new projects';

export const FOOTER_NAME = 'Ed Shaziman';
export const FOOTER_TAGLINE = 'Full-Stack / Front-End Engineer';

export type FooterLink = {
	label: string;
	href?: string;
	ariaLabel?: string;
};

export const FOOTER_LINKS: FooterLink[] = [
	{
		label: 'hello@edshaziman.com',
		href: 'mailto:hello@edshaziman.com',
		ariaLabel: 'Send an email'
	},
	{ label: 'Carlstadt, NJ (EST)' },
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/ed-shaziman',
		ariaLabel: 'LinkedIn profile'
	},
	{
		label: 'GitHub',
		href: 'https://github.com/edshaziman',
		ariaLabel: 'GitHub profile'
	}
];

export const FOOTER_COPYRIGHT = '© 2026 Ed Shaziman. All rights reserved.';
