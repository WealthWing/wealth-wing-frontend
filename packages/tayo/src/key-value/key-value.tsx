import { CSSObject } from '@emotion/react';
import * as React from 'react';

import { Text } from '../text';
import { Color, FontKeys, FontWeight, HeadingKeys, Space } from '../theme';
import { keyValue } from './key-value.styles';

type KeyValueFont = FontKeys | HeadingKeys;

export type KeyValueProps = {
	/** A short description of the value. */
	label: React.ReactNode;
	/** The primary value to display. */
	value: React.ReactNode;
	className?: string;
	gap?: Space;
	labelColor?: Color;
	labelFont?: KeyValueFont;
	textAlign?: CSSObject['textAlign'];
	valueColor?: Color;
	valueFont?: KeyValueFont;
	valueFontWeight?: FontWeight;
};

/** A compact, stacked value and label pair. */
export const KeyValue = ({
	className,
	gap = 's2',
	label,
	labelColor = 'textSecondary',
	labelFont = 'sm',
	textAlign = 'left',
	value,
	valueColor = 'textPrimary',
	valueFont = 'h6',
	valueFontWeight = 'semibold'
}: KeyValueProps) => (
	<div className={className} css={keyValue(gap)}>
		<Text
			color={valueColor}
			font={valueFont}
			fontWeight={valueFontWeight}
			tag="span"
			textAlign={textAlign}
		>
			{value}
		</Text>
		<Text color={labelColor} font={labelFont} tag="span" textAlign={textAlign}>
			{label}
		</Text>
	</div>
);
