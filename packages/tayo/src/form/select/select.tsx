import React from 'react';
import { Controller, Path, RegisterOptions, useFormContext } from 'react-hook-form';
import ReactSelect, { OptionsOrGroups, Props as ReactSelectProps } from 'react-select';

import { IconName } from '../../icon';
import { FormControl } from '../form-control';
import { SelectProvider } from './select.provider';
import { selectStyles } from './select.styles';
import { makeSelectControl, SelectMenu } from './select-components';

export type OptionType = {
	readonly label: string;
	readonly value: string;
	readonly isDisabled?: boolean;
};

export type GroupedOptionType = {
	readonly label: string;
	readonly options: readonly OptionType[];
	amount?: number;
};

export type SelectProps<TFormValues extends Record<string, unknown>> = Omit<
	ReactSelectProps,
	'options' | 'onChange' | 'isMulti'
> & {
	name: Path<TFormValues>;
	icon: IconName;
	label: string;
	hideLabel?: boolean;
	onChange: ((value: OptionType) => void) | undefined;
	options: OptionsOrGroups<OptionType, GroupedOptionType>;
	isDisabled?: boolean;
	rules?: RegisterOptions;
};

export const Select = <TFormValues extends Record<string, unknown>>({
	name,
	icon,
	label,
	hideLabel = false,
	required,
	isDisabled = false,
	onChange,
	options,
	rules,
	...restProps
}: SelectProps<TFormValues>) => {
	const context = useFormContext();
	const [selectInputWidth, setSelectInputWidth] = React.useState<number>(0);
	const [selectMenuWidth, setSelectMenuWidth] = React.useState<number>(0);

	if (!context) {
		throw new Error(
			'FormSelect component is used outside of a FormProvider context or the form context is undefined.'
		);
	}

	const { control, formState, getFieldState } = context;
	const { error } = getFieldState(name, formState);

	const selectWrapperRef = React.useRef<HTMLDivElement>(null);

	const errorId = error ? `${name}-error` : undefined;

	const CustomControl = React.useMemo(() => makeSelectControl(icon), [icon]);

	React.useLayoutEffect(() => {
		if (selectWrapperRef.current) {
			const { width } = selectWrapperRef.current.getBoundingClientRect();
			if (width !== selectInputWidth) {
				setSelectInputWidth(width);
			}
		}
	}, [selectInputWidth]);

	const ariaProps: React.AriaAttributes = {
		'aria-describedby': errorId,
		'aria-invalid': !!error,
		'aria-live': 'assertive',
		'aria-required': required
	};

	const sharedSelectStyles = React.useMemo(
		() => selectStyles(selectMenuWidth < selectInputWidth ? selectInputWidth : selectMenuWidth),
		[selectInputWidth, selectMenuWidth]
	);

	const onSelectChange = (formChange: (...event: unknown[]) => void) => (_data: unknown) => {
		const data = _data as OptionType;
		formChange(data);
		onChange?.(data);
	};

	return (
		<SelectProvider currentMenuWidth={selectMenuWidth} setCurrentMenuWidth={setSelectMenuWidth}>
			<FormControl
				ref={selectWrapperRef}
				label={label}
				error={error?.message}
				hideLabel={hideLabel}
				required={required}
				id={name}
				isSelect
				isDisabled={isDisabled}
			>
				<Controller
					control={control}
					name={name}
					rules={rules}
					render={({ field: { onChange: formChange, ...restField } }) => (
						<ReactSelect
							{...restField}
							{...ariaProps}
							{...restProps}
							inputId={name}
							isDisabled={isDisabled}
							menuPortalTarget={document.body}
							components={{
								Control: CustomControl,
								Menu: SelectMenu
							}}
							options={options ?? []}
							styles={sharedSelectStyles}
							onChange={onSelectChange(formChange)}
							unstyled
						/>
					)}
				/>
			</FormControl>
		</SelectProvider>
	);
};
