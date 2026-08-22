import { css } from '@emotion/react';
import * as React from 'react';

import { Icon } from '../icon';
import { ButtonProps } from './base.definitions';
import { button, disabledStyle, outline } from './button.styles';

/* Add spinner */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			format,
			variant,
			isLoading,
			size = 'medium',
			disabled,
			onClick,
			isFullWidth,
			leftIcon,
			rightIcon,
			...rest
		},
		ref
	) => {
		return (
			<button
				aria-disabled={disabled || isLoading ? 'true' : undefined}
				ref={ref}
				css={[
					button(format, variant, size),
					format === 'outline' && outline(variant),
					(disabled || isLoading) && disabledStyle,
					isFullWidth && css({ width: '100%' })
				]}
				disabled={disabled}
				onClick={disabled || isLoading ? undefined : onClick}
				{...rest}
			>
				{leftIcon && <Icon aria-hidden="true" name={leftIcon} size="s16" />}
				{children}
				{rightIcon && <Icon aria-hidden="true" name={rightIcon} size="s16" />}
			</button>
		);
	}
);
