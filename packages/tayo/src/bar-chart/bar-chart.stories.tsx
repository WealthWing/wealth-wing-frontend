import type { Meta, StoryObj } from '@storybook/react';

import { BarChart } from './bar-chart';

const meta: Meta<typeof BarChart> = {
	title: 'bar chart',
	component: BarChart,
	argTypes: {
		labels: {
			defaultValue: ['A', 'B', 'C'],
			description: 'Labels for the X axis'
		},
		datasets: {
			control: { type: 'object' },
			defaultValue: [
				{
					label: 'Dataset 1',
					data: [1, 2, 3],
					borderColor: '#36A2EB',
					backgroundColor: '#9BD0F5'
				},
				{
					label: 'Dataset 2',
					data: [4, 5, 6],
					borderColor: '#FF6384',
					backgroundColor: '#FFB1C1'
				}
			],
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
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
	args: {
		labels: ['A', 'B', 'C'],
		datasets: [
			{
				label: 'Dataset 1',
				data: [1, 2, 3],
				borderColor: '#36A2EB',
				backgroundColor: '#9BD0F5'
			},
			{
				label: 'Dataset 2',
				data: [4, 5, 6],
				borderColor: '#FF6384',
				backgroundColor: '#FFB1C1'
			}
		],
		ariaLabel: 'Bar chart',
		ariaDescription: 'A simple bar chart example'
	}
};
