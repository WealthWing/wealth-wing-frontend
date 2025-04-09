import { css } from '@emotion/react';
import React from 'react';

import { Box } from '../containers';
import { Icon, IconName } from '../icon';
import { theme } from '../theme';
import { ErrorMessage } from './error-message/error-message';
import { formControl } from './form-control.styles';
import { FormControlProvider, FormControlProviderProps } from './form-control-provider';
import { Label } from './label/label';

type FormControlProps = Pick<FormControlProviderProps, 'id' | 'isDisabled' | 'required'> & {
	children: React.ReactNode;
	error?: string;
	label: string;
	hideLabel?: boolean;
	isSelect?: boolean;
	iconLeft?: IconName;
};

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
	(
		{
			children,
			error,
			label,
			id,
			isDisabled,
			hideLabel,
			isSelect = false,
			required,
			iconLeft
		}: FormControlProps,
		ref
	) => {
		const [isFocused, setIsFocused] = React.useState(false);

		function handleBlur() {
			setIsFocused(false);
		}

		function handleFocus() {
			setIsFocused(true);
		}
		const hasError = !!error;

		const isFocusedError = hasError && isFocused;
		const focused = !hasError && isFocused;
		const isRestingError = hasError && !isFocused;
		const isResting = !hasError && !isFocused;

		return (
			<FormControlProvider
				hasError={hasError}
				id={id}
				isDisabled={isDisabled}
				required={required}
			>
				<div ref={ref}>
					<Label hideLabel={hideLabel}>{label}</Label>
					<div
						css={[
							formControl.root,
							!isSelect && css({ padding: `${theme.space.s10}` }),
							isFocusedError && formControl.focusedError,
							focused && formControl.focused,
							isRestingError && formControl.focusedError,
							isResting && formControl.restingDefault,
							isDisabled && formControl.disabledControl
						]}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{iconLeft ? <Icon name={iconLeft} color="textSecondary" /> : null}
						{children}
					</div>

					{hasError && (
						<Box mt="s2">
							<ErrorMessage message={error} />
						</Box>
					)}
				</div>
			</FormControlProvider>
		);
	}
);
