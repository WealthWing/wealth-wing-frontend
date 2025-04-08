import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '../../button';
import { /* GroupedOptionType, */ OptionType, Select, SelectProps } from './select';

type FormValues = {
	select: OptionType;
	groupSelect: OptionType[];
};

const flavourOptions: readonly OptionType[] = [
	{ value: 'vanilla ', label: 'Vanilla', isDisabled: true },
	{ value: 'chocolate', label: 'Chocolate_ChocolateChocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'salted-caramel', label: 'Salted Caramel' }
];

/* const colourOptions: readonly OptionType[] = [
	{ value: 'ocean', label: 'Ocean' },
	{ value: 'blue', label: 'Blue', isDisabled: true },
	{ value: 'purple', label: 'Purple' },
	{ value: 'red', label: 'Red' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'yellow', label: 'Yellow' },
	{ value: 'green', label: 'Green' },
	{ value: 'forest', label: 'Forest' },
	{ value: 'slate', label: 'Slate' },
	{ value: 'silver', label: 'Silver' }
]; */

/* const groupedOptions: readonly GroupedOptionType[] = [
	{
		label: 'Colours',
		options: colourOptions,
		amount: 10
	},
	{
		label: 'Flavours',
		options: flavourOptions,
		amount: 4
	}
]; */

const StoryComponentSingle = (args: SelectProps<FormValues>) => {
	const form = useForm<FormValues>();
	// eslint-disable-next-line no-console
	console.log(form.watch('select'));

	return (
		<FormProvider {...form}>
			<Select<FormValues>
				{...args}
				name="select"
				rules={{ validate: { required: (v) => !!v?.value || 'Please select' } }}
				options={flavourOptions}
			/>

			<Button type="submit" format="text" variant="primary">
				Submit
			</Button>
		</FormProvider>
	);
};

const meta: Meta<typeof Select> = {
	component: Select
};

export default meta;

export const SingleSelect: StoryObj<typeof meta> = {
	args: {
		label: 'Favorite Flavor',
		name: 'select',
		required: true,
		hideLabel: false,
		isSearchable: true,
		closeMenuOnSelect: false,
		placeholder: 'Select Favorite Flavor',
		isDisabled: false,
		isLoading: false,
		isClearable: true,
		hideSelectedOptions: false
	},

	render: (args) => <StoryComponentSingle {...(args as SelectProps<FormValues>)} />
};
