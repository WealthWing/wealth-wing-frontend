import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { SkeletonAreaLoader } from '../skeleton-loader';
import { BarChartData, barChartOptions } from './bar-chart.definitions';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BarChartProps = {
	chartData?: BarChartData;
	ariaLabel?: string;
	ariaDescription?: string;
	labels: BarChartData['labels'];
	datasets: BarChartData['datasets'];
	title?: string;
	displayLegend?: boolean;
	isCurrencyFormat?: boolean;
	className?: string;
	isLoading?: boolean;
};

export const BarChart = ({
	chartData,
	ariaDescription,
	ariaLabel,
	datasets,
	labels,
	displayLegend,
	isCurrencyFormat,
	title,
	isLoading = false,
	className
}: BarChartProps) => {
	const options = barChartOptions(title, displayLegend, isCurrencyFormat);

	if (isLoading) {
		return <SkeletonAreaLoader className={className} />;
	}

	return (
		<figure
			aria-label={ariaLabel}
			aria-describedby={ariaDescription ? 'chart-desc' : undefined}
			className={className}
		>
			<Bar options={options} data={{ ...chartData, labels, datasets }} />
		</figure>
	);
};
