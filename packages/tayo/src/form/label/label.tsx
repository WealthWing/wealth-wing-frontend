import { css } from '@emotion/react';
import React from 'react';

import { theme } from '../../theme';
import { useFormControl } from '../form-control-provider';
import { requiredAsterisk, screenReaderOnly } from '../shared.styles';

export const labelStyle = css`
	color: ${theme.color.textSecondary};
	font: ${theme.font.sm};
	grid-area: label;
`;

type LabelProps = {
	children: React.ReactNode;
	hideLabel?: boolean;
};

export const Label = ({ children, hideLabel }: LabelProps) => {
	const { id, required } = useFormControl();

	return (
		<label
			css={[labelStyle, required && requiredAsterisk, hideLabel && screenReaderOnly]}
			htmlFor={id}
		>
			{children}
		</label>
	);
};
