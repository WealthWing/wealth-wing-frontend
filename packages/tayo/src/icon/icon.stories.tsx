import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../text';
import { iconNames } from './generated';
import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
	title: 'Icons',
	component: Icon,
	parameters: {}
};

export default meta;

export const SingleIcon: StoryObj<typeof meta> = {
	args: {
		name: 'calendar',
		size: 's28'
	}
};

export const AllIcons: StoryObj<typeof meta> = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, 100px)',
				columnGap: '12px',
				justifyContent: 'center',
				rowGap: '32px'
			}}
		>
			{iconNames.map((iconName) => (
				<div
					key={iconName}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '16px',
						margin: '10px'
					}}
				>
					<Icon name={iconName} size="s28" />
					<Text font="lg" color="textPrimary">
						{iconName}
					</Text>
				</div>
			))}
		</div>
	),

	args: {}
};
