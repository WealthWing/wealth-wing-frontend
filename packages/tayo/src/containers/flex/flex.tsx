import { css } from '@emotion/react';
import { CSSProperties } from 'react';

import { Space, theme } from '../../theme';

export type FlexOptions = {
	alignItems?: CSSProperties['alignItems'];
	justifyContent?: CSSProperties['justifyContent'];
	flex?: CSSProperties['flex'];
	flexFlow?: CSSProperties['flexFlow'];
	flexGrow?: CSSProperties['flexGrow'];
	flexShrink?: CSSProperties['flexShrink'];
	flexBasis?: CSSProperties['flexBasis'];
	direction?: CSSProperties['flexDirection'];
	wrap?: CSSProperties['flexWrap'];
	gap?: Space;
};

export const flexContainer = ({
	alignItems,
	direction = 'column',
	flex,
	flexBasis,
	flexFlow,
	flexGrow,
	flexShrink,
	gap = 's10',
	justifyContent,
	wrap
}: FlexOptions) =>
	css({
		alignItems: alignItems && alignItems,
		display: 'flex',
		flex: flex && flex,
		flexDirection: direction,
		flexBasis,
		flexFlow,
		flexGrow,
		flexShrink,
		flexWrap: wrap && wrap,
		gap: theme.space[gap],
		justifyContent: justifyContent && justifyContent
	});

type FlexProps = FlexOptions & { children: React.ReactNode };

export const Flex = ({ children, ...props }: FlexProps) => (
	<div css={flexContainer(props)}>{children}</div>
);
