import { css } from '@emotion/react';
import { buttonStylesConfig, theme } from '@wealth-wing/tayo';

const buttonRegular = buttonStylesConfig.primary.regular;

export const reportsPage = {
	filterBar: css`
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: ${theme.space.s8};
	`,
	filterButton: css`
		background: transparent;
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${buttonRegular.color};
		cursor: pointer;
		font: ${theme.font.lg};
		padding: ${theme.space.s4} ${theme.space.s10};
		transition: all 0.2s ease;

		:hover {
			background: ${buttonRegular.activeColor};
		}
	`,
	filterButtonActive: css`
		background: ${buttonRegular.background};
	`,
	separator: css`
		background-color: ${theme.color.cardBackground60};
		height: ${theme.space.s24};
		margin: 0 ${theme.space.s8};
		width: 1px;
	`,
	chartContainer: css`
		align-items: center;
		display: flex;
		justify-content: center;
		max-height: 400px;
		min-height: 320px;
		width: 100%;
	`,
	accountSelect: css`
		min-width: 200px;
	`,
	totalBadge: css`
		align-items: center;
		display: flex;
		gap: ${theme.space.s8};
	`,
	colorDot: (color: string) => css`
		background-color: ${color};
		border-radius: 50%;
		display: inline-block;
		flex-shrink: 0;
		height: 10px;
		width: 10px;
	`,
	percentageBar: (percentage: number, color: string) => css`
		background-color: ${theme.color.cardBackground60};
		border-radius: 3px;
		height: 6px;
		overflow: hidden;
		position: relative;
		width: 100%;

		&::after {
			background-color: ${color};
			border-radius: 3px;
			content: '';
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			transition: width 0.3s ease;
			width: ${percentage}%;
		}
	`
};
