import * as React from 'react';
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

import { Icon, IconName } from '../../icon';
import { FormControl } from '../form-control';
import { input } from '../input/input.styles';
import { datePicker } from './date-picker.styles';

type SinglePickerProps = Omit<
	ReactDatePickerProps,
	| 'selectsRange'
	| 'startDate'
	| 'endDate'
	| 'selectsDisabledDaysInRange'
	| 'icon'
	| 'customInput'
	| 'onChange'
	| 'selectsMultiple'
	| 'selectRange'
>;

export type DatePickerProps = SinglePickerProps & {
	name: string;
	label: string;
	required?: boolean;
	icon?: IconName;
	onChange?: (date: Date | null) => void;
	rules?: RegisterOptions;
};

export const DatePicker = ({
	name,
	label,
	disabled,
	onChange,
	required,
	icon,
	rules,
	placeholderText,
	showIcon,
	...restProps
}: DatePickerProps) => {
	const { control, formState, getFieldState } = useFormContext();
	const { error } = getFieldState(name, formState);
	const errorWrapperId = `${name}-errors`;

	return (
		<FormControl
			label={label}
			required={required}
			isDisabled={disabled}
			error={error?.message}
			id={errorWrapperId}
		>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange: onFieldChange, value, ref } }) => (
					<div ref={ref} tabIndex={-1} css={datePicker}>
						<ReactDatePicker
							{...restProps}
							id={name}
							name={name}
							selected={value}
							selectsMultiple={undefined}
							showMonthYearDropdown={undefined}
							ariaDescribedBy={error ? errorWrapperId : undefined}
							ariaInvalid={error ? 'true' : undefined}
							ariaRequired={required ? 'true' : undefined}
							autoComplete="off"
							customInput={<input css={input} />}
							dateFormat="dd/MM/yyyy"
							disabled={disabled}
							icon={
								icon ? (
									<Icon
										name={icon}
										size="s16"
										color={disabled ? 'black40' : 'black100'}
									/>
								) : undefined
							}
							onChange={(date) => {
								onFieldChange(date);
								if (onChange) {
									onChange(date);
								}
							}}
							placeholderText={placeholderText}
							showIcon={showIcon}
						/>
					</div>
				)}
			/>
		</FormControl>
	);
};
