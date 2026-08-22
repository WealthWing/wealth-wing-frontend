import type { Meta, StoryObj } from '@storybook/react';

import { Markdown } from './markdown';

const meta: Meta<typeof Markdown> = {
	component: Markdown
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const FinancialAnswer: Story = {
	args: {
		children: `Here's a concise summary of your spending for May through July 2026.

## Overall

| Metric | Amount |
|---|---:|
| Gross expenses | $11,261.39 |
| **Net spending** | **$11,261.39** |
| Net activity | +$5,907.19 |

## Quick observations

- **Income remained steady** across all three months.
- Spending decreased by approximately 9%.
- Net activity remained positive.`
	}
};
