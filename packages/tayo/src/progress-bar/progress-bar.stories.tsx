import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './progress-bar';
import { progressBarVariants } from './progress-bar.definitions';

const meta: Meta<typeof ProgressBar> = {
	component: ProgressBar,
	args: {
		'aria-label': 'Progress',
		value: 65
	}
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div css={{ display: 'grid', gap: '1rem' }}>
			{progressBarVariants.map((variant) => (
				<div css={{ display: 'grid', gap: '0.5rem' }} key={variant}>
					<span>{variant}</span>
					<ProgressBar {...args} aria-label={`${variant} progress`} variant={variant} />
				</div>
			))}
		</div>
	)
};

export const Values: Story = {
	render: (args) => (
		<div css={{ display: 'grid', gap: '1rem' }}>
			{[0, 35, 100].map((value) => (
				<div css={{ display: 'grid', gap: '0.5rem' }} key={value}>
					<span>{value}%</span>
					<ProgressBar {...args} aria-label={`${value}% progress`} value={value} />
				</div>
			))}
		</div>
	)
};

export const ClampedValues: Story = {
	render: (args) => (
		<div css={{ display: 'grid', gap: '1rem' }}>
			{[-20, 120].map((value) => (
				<div css={{ display: 'grid', gap: '0.5rem' }} key={value}>
					<span>Input: {value}%</span>
					<ProgressBar {...args} aria-label={`${value}% input progress`} value={value} />
				</div>
			))}
		</div>
	)
};
