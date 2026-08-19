import { css } from '@emotion/react';

import { theme } from '../theme';
import type { ProgressBarVariant } from './progress-bar.definitions';

export const progressBarTrack = css`
	background-color: ${theme.color.cardBackground80};
	border-radius: ${theme.borderRadius.radiusDefault};
	height: ${theme.space.s8};
	overflow: hidden;
	width: 100%;
`;

export const progressBarFill = (value: number, variant: ProgressBarVariant) => css`
	background: ${theme.gradient[variant]};
	height: 100%;
	width: ${value}%;
`;
