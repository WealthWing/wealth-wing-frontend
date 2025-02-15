import React from 'react';

import { useFormControl } from '../form-control-provider';
import { input } from './input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
	const { isDisabled, hasError, id, required } = useFormControl();

	return (
		<input
			{...props}
			css={input}
			aria-describedby={hasError ? `${id}-error` : undefined}
			aria-required={required}
			aria-invalid={hasError}
			disabled={isDisabled}
			id={id}
			ref={ref}
		/>
	);
});
