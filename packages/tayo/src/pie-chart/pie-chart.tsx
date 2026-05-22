import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { SkeletonAreaLoader } from '../skeleton-loader';
import { PieChartData, pieChartOptions } from './pie-chart.definitions';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

type PieChartProps = {
	labels: PieChartData['labels'];
	datasets: PieChartData['datasets'];
	title?: string;
	displayLegend?: boolean;
	isCurrencyFormat?: boolean;
	ariaLabel?: string;
	ariaDescription?: string;
	className?: string;
	isLoading?: boolean;
};

export const PieChart = ({
	ariaDescription,
	ariaLabel,
	datasets,
	labels,
	displayLegend,
	isCurrencyFormat,
	title,
	isLoading = false,
	className
}: PieChartProps) => {
	const options = pieChartOptions(title, displayLegend, isCurrencyFormat);

	if (isLoading) {
		return <SkeletonAreaLoader className={className} />;
	}

	return (
		<figure
			aria-label={ariaLabel}
			aria-describedby={ariaDescription ? 'pie-chart-desc' : undefined}
			className={className}
		>
			<Doughnut options={options} data={{ labels, datasets }} />
		</figure>
	);
};
