import { formatUSD } from '@wealth-wing/utils';
import type { ChartData, ChartOptions } from 'chart.js';

import { darkTheme } from '../theme';

export type PieChartData = ChartData<'doughnut'>;
export type PieChartOptions = ChartOptions<'doughnut'>;

export const pieChartOptions = (
	title?: string,
	displayLegend?: boolean,
	isCurrencyFormat?: boolean
): PieChartOptions => {
	return {
		plugins: {
			legend: {
				position: 'right',
				display: displayLegend ?? true,
				labels: {
					color: darkTheme.color.textPrimary,
					padding: 16,
					usePointStyle: true,
					pointStyle: 'circle',
					font: {
						size: 13
					}
				}
			},
			title: {
				display: !!title,
				text: title,
				color: darkTheme.color.textPrimary
			},
			tooltip: {
				callbacks: {
					label(context) {
						const value = context.parsed;
						const label = context.label || '';
						const formattedValue = isCurrencyFormat ? formatUSD(value) : `${value}`;
						return ` ${label}: ${formattedValue}`;
					}
				},
				bodyColor: darkTheme.color.textSecondary,
				titleColor: darkTheme.color.textPrimary
			}
		},
		cutout: '60%',
		maintainAspectRatio: false
	};
};
