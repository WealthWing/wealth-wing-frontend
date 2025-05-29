import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Toggle, ToggleItem } from './index';

const meta: Meta<typeof Toggle> = {
	component: Toggle,
	decorators: [
		function Component(_, ctx) {
			const [activeIndex, setActiveIndex] = React.useState(0);
			return (
				<Toggle {...ctx.args} activeIndex={activeIndex} onToggle={setActiveIndex}>
					<ToggleItem title="Option One" onClick={action('1')} />
					<ToggleItem title="Option Two" onClick={action('2')} />
					<ToggleItem title="Option Two" onClick={action('3')} />
				</Toggle>
			);
		}
	]
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {}
};
