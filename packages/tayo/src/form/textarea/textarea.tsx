import React from 'react';

import { useFormControl } from '../form-control-provider';
import { textArea } from './textarea.styles';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	lines: number;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ lines, ...props }, ref) => {
		const { isDisabled, hasError, id, required } = useFormControl();

		return (
			<textarea
				{...props}
				css={textArea(lines)}
				aria-describedby={hasError ? `${id}-error` : undefined}
				aria-required={required}
				aria-invalid={hasError}
				disabled={isDisabled}
				id={id}
				ref={ref}
			/>
		);
	}
);
