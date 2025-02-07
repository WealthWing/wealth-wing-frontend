/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
	component: Heading
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const _Heading: Story = {
	args: {
		children: 'Hello World',
		tag: 'h1'
	}
};
