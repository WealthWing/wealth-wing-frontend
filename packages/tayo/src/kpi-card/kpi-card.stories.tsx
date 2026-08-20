import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../text';
import { KpiCard } from './kpi-card';

const meta: Meta<typeof KpiCard> = {
	component: KpiCard
};

export default meta;
type Story = StoryObj<typeof KpiCard>;

export const NetSpending: Story = {
	args: {
		backgroundColor: 'cardBackground100',
		border: 'default',
		borderColor: 'secondary60',
		icon: 'arrow-down',
		iconBorderColor: 'secondary60',
		iconColor: 'secondary60',
		label: 'Net spending',
		labelColor: 'secondary60',
		supportingText: (
			<>
				after{' '}
				<Text color="secondary60" tag="span">
					$348.20
				</Text>{' '}
				refunded
			</>
		),
		value: '$4,238.16'
	}
};

export const Income: Story = {
	args: {
		backgroundColor: 'cardBackground100',
		border: 'default',
		borderColor: 'green60',
		icon: 'arrow-up-right',
		iconBorderColor: 'green60',
		iconColor: 'green60',
		label: 'Income',
		labelColor: 'green60',
		supportingText: 'this month',
		value: '$12,567.82',
		valueColor: 'green100'
	}
};
