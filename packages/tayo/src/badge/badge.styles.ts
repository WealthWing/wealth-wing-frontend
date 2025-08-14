import { css } from '@emotion/react';

import { zIndex } from '../constants';
import { theme } from '../theme';

export const badge = css`
	align-items: center;
	border-radius: 100px;
	display: inline-flex;
	flex-direction: row;
	font: ${theme.font.sm};
	gap: ${theme.space.s8};
	max-width: 20rem;
	padding: ${theme.space.s4} ${theme.space.s8};
	white-space: nowrap;
`;

export const badgeTextEllipsis = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const truncatedBadges = css`
	display: flex;
	flex-wrap: nowrap;
	gap: ${theme.space.s4};

	:not(:only-child) {
		margin-right: ${theme.space.s4};
	}
`;

export const lineHeight = css`
	li {
		line-height: 1.5;
	}
`;

export const badges = css`
	align-items: center;
	display: inline-flex;
	flex-wrap: wrap;
	gap: ${theme.space.s8};
`;

export const hidden = css`
	display: block;
	position: absolute;
	visibility: hidden;
`;

export const tooltipTrigger = css`
	position: relative;
	z-index: ${zIndex.badgeTooltips};
`;
