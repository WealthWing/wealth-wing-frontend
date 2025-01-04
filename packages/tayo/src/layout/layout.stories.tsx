import type { Meta, StoryObj } from '@storybook/react';
import { Main, AppWrapper } from './containers';

const meta: Meta<typeof AppWrapper> = {
	component: AppWrapper
};

export default meta;

type Story = StoryObj<typeof AppWrapper>;

export const Default: Story = {
	render: () => {
		return (
			<AppWrapper>
				<Main>
					<p>Hello World</p>
				</Main>
			</AppWrapper>
		);
	}
};
