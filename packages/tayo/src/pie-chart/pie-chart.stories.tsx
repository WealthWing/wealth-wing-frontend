import type { Meta, StoryObj } from '@storybook/react';

import { PieChart } from './pie-chart';

const meta: Meta<typeof PieChart> = {
	title: 'pie chart',
	component: PieChart,
	argTypes: {
		labels: {
			description: 'Labels for each segment'
		},
		datasets: {
			control: { type: 'object' },
			description: 'Array of dataset objects'
		},
		ariaLabel: {
			control: 'text',
			description: 'Aria label for accessibility'
		},
		ariaDescription: {
			control: 'text',
			description: 'Aria description for accessibility'
		}
	}
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
	args: {
		labels: ['Groceries', 'Rent', 'Dining', 'Utilities', 'Transport'],
		datasets: [
			{
				label: 'Spending',
				data: [45000, 120000, 32000, 18000, 15000],
				backgroundColor: ['#582CFF', '#D62B70', '#36A2EB', '#4BC0C0', '#FF9F40'],
				borderWidth: 0
			}
		],
		isCurrencyFormat: true,
		displayLegend: true
	}
};

export const Loading: Story = {
	args: {
		...Default.args,
		isLoading: true
	}
};
