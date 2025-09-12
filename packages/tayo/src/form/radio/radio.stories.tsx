import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../button';
import { Text } from '../../text';
import { Radio } from './radio';
import { RadioProps } from './radio.definitions';

const meta = {
	component: Radio,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'fullscreen',
	}
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
	args: {
		label: 'Watermelon',
		disabled: false
	},
	render: (args: RadioProps) => <Radio {...args} />
};

type GroupFormValues = {
	iceCreamFlavor: string;
};

const GroupComponent = () => {
	const { register, handleSubmit, getValues } = useForm<GroupFormValues>({
		defaultValues: {
			iceCreamFlavor: 'vanilla'
		}
	});

	const onSubmit = (data: GroupFormValues) => {
		alert(data.iceCreamFlavor);
		return undefined;
	};

	const formFieldId = 'iceCreamFlavor';
	const iceCreamDefault = getValues(formFieldId);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				alignItems: 'flex-start'
			}}
		>
			<Text>
				*Note: This story is an example of using React Hook Form with this component
			</Text>
			<fieldset
				defaultValue={iceCreamDefault}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '.25rem',
					alignItems: 'flex-start'
				}}
			>
				<legend style={{ marginBottom: '.5rem' }}>
					What is your favorite ice cream flavor?
				</legend>
				<Radio label="Vanilla" {...register(formFieldId)} value="vanilla" />
				<Radio label="Chocolate" {...register(formFieldId)} value="chocolate" />
				<Radio label="Strawberry" {...register(formFieldId)} value="strawberry" />
				<Radio label="Mint Chip" {...register(formFieldId)} value="mintchip" />
				<Radio disabled label="Cherry Garcia" {...register(formFieldId)} value="mintchip" />
				<Radio
					label="Lorem ipsum dolor si amet mLorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet"
					{...register(formFieldId)}
					value="mintchip"
				/>
			</fieldset>

			<Button type="submit" format="text" variant="primary">
				Submit
			</Button>
		</form>
	);
};

export const Group: Story = {
	args: {
		label: ' '
	},
	render: (args: RadioProps) => <GroupComponent {...args} />
};
