export type HeadlinePart = {
	text: string;
	accent: boolean;
};

export const CTA_HEADLINE_PARTS: HeadlinePart[] = [
	{ text: "LET'S TALK ABOUT ", accent: false },
	{ text: 'YOUR PRODUCT', accent: true }
];

export const CTA_SUBTEXT =
	"If you're still figuring out what to build — or you have something broken that needs fixing — send me a quick description. I'll tell you honestly if it's a fit and what I'd do first.";

export const CTA_BUTTON_LABEL = 'Send Your Project Brief';

export const AVAILABILITY_LABEL = 'Contract Spot Available';

export const FORM_PROJECT_PLACEHOLDER =
	'What are you building, modernizing, or trying to untangle? Share scope, goals, constraints, and where the boundaries feel fuzzy.';
export const FORM_EMAIL_PLACEHOLDER = 'your.email@company.com';

export const FOOTER_NAME = 'Ed Shaziman';
export const FOOTER_TAGLINE = 'Full-Stack Engineer — React, Python & AI';

export type FooterLink = {
	label: string;
	href?: string;
	ariaLabel?: string;
};

export const FOOTER_LINKS: FooterLink[] = [
	{
		label: 'erdoanshaziman@gmail.com',
		href: 'mailto:erdoanshaziman@gmail.com',
		ariaLabel: 'Send an email'
	},
	{ label: 'Carlstadt, NJ (EST)' },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/erdoan-ed-shaziman-0533611b9',
		ariaLabel: 'LinkedIn profile'
	},
	{
		label: 'GitHub',
		href: 'https://github.com/shazy89',
		ariaLabel: 'GitHub profile'
	}
];

export const FOOTER_COPYRIGHT = '© 2022–2026 Erdoan Shaziman. All rights reserved.';
