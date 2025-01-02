import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { buttonFormats, buttonVariants } from './base.definitions';
import { theme } from '../theme';
import { css } from '@emotion/react';

const meta: Meta<typeof Button> = {
	component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		variant: 'primary',
		format: 'regular',
		size: 'medium',
		children: 'Click Me'
	}
};

const container = css`
	display: flex;
`;

const rowHeight = '2.5rem';

const labelColumn = css`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-right: 1.5rem;
	width: 100px;
	margin-top: 4.5rem;
`;

const buttonContainer = css`
	display: flex;
	gap: 1.5rem;
`;

const buttonRow = css`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	min-height: ${rowHeight};
`;

const label = css`
	color: ${theme.color.black60};
	text-align: center;
	min-height: ${rowHeight};
`;

const buttonColumn = css`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const All: Story = {
	argTypes: {
		variant: {
			control: false
		},
		format: {
			control: false
		}
	},
	render: () => (
		<div css={container}>
			<div css={labelColumn}>
				{buttonFormats.map((format) => (
					<div css={label} key={format}>
						{format}
					</div>
				))}
			</div>
			<div css={buttonContainer}>
				{buttonVariants.map((variant) => (
					<div css={buttonColumn} key={variant}>
						<div css={label}>{variant}</div>
						{buttonFormats.map((format) => (
							<div css={buttonRow} key={format}>
								<Button format={format} variant={variant}>
									Button
								</Button>
								<Button format={format} variant={variant} size="small">
									Button
								</Button>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
};
