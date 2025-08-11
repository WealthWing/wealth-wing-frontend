import type { Meta, StoryObj } from '@storybook/react';

import { TabPanels, Tabs, TabsList, TabsPanel, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
	component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TabsStory: Story = {
	args: {
		children: (
			<>
				<TabsList>
					<TabsTrigger label="One" />
					<TabsTrigger label="Two" />
				</TabsList>
				<TabPanels>
					<TabsPanel>One</TabsPanel>
					<TabsPanel>Two</TabsPanel>
				</TabPanels>
			</>
		)
	}
};
