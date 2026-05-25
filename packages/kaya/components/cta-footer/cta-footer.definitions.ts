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

export type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const FORM_SUCCESS_HEADLINE = 'Received.';
export const FORM_SUCCESS_BODY =
	"I'll read through what you've shared and get back to you within a day or two. If it's a fit, I'll say so directly — and tell you what I'd do first.";
export const FORM_SUCCESS_RESET_LABEL = 'Send a different message';
export const FORM_ERROR_MESSAGE =
	'Something went wrong sending that. Try emailing me directly at erdoanshaziman@gmail.com';
