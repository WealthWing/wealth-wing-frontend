import { css } from '@emotion/react';

import { theme } from '../theme';

const divider = `1px solid color-mix(in srgb, ${theme.color.indigo60} 30%, transparent)`;

export const markdown = {
	root: css`
		line-height: 1.65;
		min-width: 0;
		overflow-wrap: anywhere;

		> :first-child {
			margin-top: 0;
		}

		> :last-child {
			margin-bottom: 0;
		}

		p,
		ul,
		ol,
		blockquote,
		pre,
		> div {
			margin: ${theme.space.s12} 0;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: 600;
			margin: ${theme.space.s24} 0 ${theme.space.s10};
		}

		h1,
		h2 {
			font: ${theme.font.h5};
		}

		h3,
		h4,
		h5,
		h6 {
			font: ${theme.font.h6};
		}

		ul,
		ol {
			padding-left: ${theme.space.s24};
		}

		ul {
			list-style: disc;
		}

		ol {
			list-style: decimal;
		}

		li + li {
			margin-top: ${theme.space.s8};
		}

		strong {
			font-weight: 600;
		}

		a {
			color: ${theme.color.primary40};
			text-decoration: underline;
			text-underline-offset: 3px;
		}

		a:focus-visible {
			outline: 2px solid ${theme.color.primary40};
			outline-offset: 3px;
		}

		blockquote {
			border-left: 3px solid ${theme.color.primary60};
			padding-left: ${theme.space.s16};
		}

		code {
			background: color-mix(in srgb, ${theme.color.cardBackground80} 65%, transparent);
			border-radius: ${theme.borderRadius.radiusSmall};
			font-family: monospace;
			padding: ${theme.space.s2} ${theme.space.s4};
		}

		pre {
			overflow-x: auto;
		}

		pre code {
			display: block;
			padding: ${theme.space.s12};
		}

		hr {
			border: 0;
			border-top: ${divider};
			margin: ${theme.space.s20} 0;
		}
	`,
	tableScroll: css`
		border: ${divider};
		border-radius: ${theme.borderRadius.radiusMedium};
		overflow-x: auto;
		width: 100%;

		table {
			border-collapse: collapse;
			font-variant-numeric: tabular-nums;
			min-width: 32rem;
			width: 100%;
		}

		th,
		td {
			border-bottom: ${divider};
			padding: ${theme.space.s10} ${theme.space.s12};
			text-align: left;
		}

		th {
			background: color-mix(in srgb, ${theme.color.cardBackground80} 55%, transparent);
			font-weight: 600;
		}

		tr:last-child td {
			border-bottom: 0;
		}
	`
};
