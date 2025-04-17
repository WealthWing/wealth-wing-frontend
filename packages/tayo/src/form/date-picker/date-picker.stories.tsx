import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '../../button';
import { Flex } from '../../containers';
import { DatePicker, DatePickerProps } from './date-picker';

type FormValues = {
	iceCreamPartyDate: Date;
};

const StoryComponentSingle = (args: DatePickerProps) => {
	const form = useForm<FormValues>();
	const { watch } = form;
	// eslint-disable-next-line no-console
	console.log(watch('iceCreamPartyDate'));
	return (
		<FormProvider {...form}>
			<Flex>
				<DatePicker {...args} />
			</Flex>
			<Button type="submit" variant="primary" format="regular">
				Submit
			</Button>
		</FormProvider>
	);
};

const meta: Meta<typeof DatePicker> = {
	component: DatePicker
};

export default meta;

export const Date: StoryObj<typeof meta> = {
	args: {
		label: 'Date',
		name: 'iceCreamPartyDate',
		rules: { required: { value: true, message: 'Please select a date' } },
		isClearable: true,
		placeholderText: undefined,
		showIcon: true,
		disabled: false,
		required: true
	},
	render: (args) => <StoryComponentSingle {...args} />
};
