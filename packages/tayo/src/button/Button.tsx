import * as React from 'react';
import { ButtonProps } from './base.definitions';
import { button, outline, disabledStyle } from './button.styles';
import {} from '@emotion/react';

/* Add spinner
   add icon
*/

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ children, format, variant, isLoading, size = 'medium', disabled, onClick, ...rest },
		ref
	) => {
		return (
			<button
				aria-disabled={disabled || isLoading ? 'true' : undefined}
				ref={ref}
				css={[
					button(format, variant, size),
					format === 'outline' && outline(variant),
					(disabled || isLoading) && disabledStyle
				]}
				disabled={disabled}
				onClick={disabled || isLoading ? undefined : onClick}
				{...rest}
			>
				<span>{children}</span>
			</button>
		);
	}
);
