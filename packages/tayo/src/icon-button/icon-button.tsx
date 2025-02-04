import * as React from 'react';

import { ButtonProps } from '../button/base.definitions';
import { button, outline } from '../button/button.styles';
import { Icon, IconName } from '../icon';
import { Color } from '../theme';
import { iconButton } from './icon-button.styles';

export type IconButtonProps = Omit<ButtonProps, 'iconAlignment' | 'iconName' | 'children'> & {
	iconName: IconName;
	iconColor: Color;
	label: string;
	isLoading?: boolean;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			iconName,
			label,
			format,
			iconColor,
			size = 'medium',
			variant,
			isLoading,
			disabled,
			onClick,
			...rest
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				aria-disabled={disabled || isLoading ? 'true' : undefined}
				aria-label={label}
				onClick={disabled || isLoading ? undefined : onClick}
				css={[
					button(format, variant, size),
					format === 'outline' && outline(variant),
					iconButton(format, size)
				]}
				{...rest}
			>
				<Icon color={iconColor} name={iconName} size={size === 'small' ? 's12' : 's16'} />
			</button>
		);
	}
);
