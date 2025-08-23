import { formatUSD } from '@wealth-wing/utils';
import type { ChartData, ChartOptions } from 'chart.js';

import { darkTheme } from '../theme';

export type BarChartData = ChartData<'bar'>;
export type BarChartOptions = ChartOptions<'bar'>;

export const barChartOptions = (
	title?: string,
	displayLegend?: boolean,
	isCurrencyFormat?: boolean
): BarChartOptions => {
	return {
		plugins: {
			legend: {
				position: 'bottom',
				display: displayLegend
			},
			title: {
				display: !!title,
				text: title,
				color: darkTheme.color.textPrimary
			},
			tooltip: {
				callbacks: {
					label(context) {
						const value = context.parsed.y;
						return isCurrencyFormat ? formatUSD(value) : `${value}`;
					}
				},
				bodyColor: darkTheme.color.textSecondary,
				titleColor: darkTheme.color.textPrimary
			}
		},
		scales: {
			x: {
				ticks: {
					color: darkTheme.color.textPrimary
				}
			},
			y: {
				ticks: {
					color: darkTheme.color.textPrimary,
					callback(value) {
						return isCurrencyFormat
							? formatUSD(Number(value), { compactDisplay: 'short' })
							: value;
					},
					count: 5
				}
			}
		},
		maintainAspectRatio: false
	};
};
