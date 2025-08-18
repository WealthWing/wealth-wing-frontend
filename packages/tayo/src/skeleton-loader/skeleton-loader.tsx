import * as React from 'react';

import { FontSize, theme } from '../theme';
import { skeletonLoader } from './skeleton-loader.styles';

/**
 * UX reference: https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a
 * Findings of reference:
 * - Designers should prefer a wave effect (or shimmer, much like Facebook uses) over a pulse
 * - Motion should not be so fast as to draw attention to the skeleton objects (slow and steady, like found in the Google iOS app is optimal)
 * - Designers should prefer animation that moves from left to right (it would be interesting to see if RTL reading cultures would interpret this differently)
 *
 * Component inspiration: https://mui.com/material-ui/react-skeleton/
 */

export type SkeletonAreaLoaderVariant = 'circular' | 'rounded';

export type SkeletonAreaLoaderProps = { variant?: SkeletonAreaLoaderVariant } & Pick<
	React.CSSProperties,
	'maxHeight' | 'minHeight' | 'minWidth' | 'maxWidth' | 'height' | 'width'
>;

const skeletonAreaVariants: Record<SkeletonAreaLoaderVariant, string> = {
	circular: '50%',
	rounded: theme.borderRadius.radiusMedium
};

/**
 * Skeleton Area Loader
 * @use Use this loader for large areas (ex: tables, images) or circular elements (ex: avatars)
 * @variant circular: only the "width" attibute will be used for sizing
 * @variant rounded: 'maxHeight' | 'minHeight' | 'minWidth' | 'maxWidth' | 'height' | 'width' are available for use
 */
export const SkeletonAreaLoader = ({ variant = 'rounded', ...styles }: SkeletonAreaLoaderProps) => {
	const isCircular = variant === 'circular';
	const { width } = styles;
	const skeletonStyles = isCircular
		? {
				width,
				height: width
		  }
		: styles;

	return (
		<div
			css={skeletonLoader.root}
			style={{ borderRadius: skeletonAreaVariants[variant], ...skeletonStyles }}
		/>
	);
};

/**
 * Skeleton Text Loader
 * @use Use to represent lines of text in loading screens
 * @variant theme font size ("headerH1" | "headerH2" | "headerH3" | "headerH4" | "headerH5" | "headerPretitle1" | "headerPretitle2" | "headerPretitle3" | "bodyXL" | "bodyL" | "bodyM" | "bodySM" | "bodyXS" | "bodyXXS" | "bodyTiny")
 * @note This component uses theme font sizes to accurately determine the height of the loader
 */
export type SkeletonTextLoaderProps = {
	variant: FontSize;
} & Pick<React.CSSProperties, 'minWidth' | 'maxWidth' | 'width'>;

export const SkeletonTextLoader = ({
	variant,
	width = '100%',
	...styles
}: SkeletonTextLoaderProps) => (
	<div
		css={skeletonLoader.root}
		style={{ borderRadius: theme.borderRadius.radiusMedium, width, ...styles }}
	>
		{/* Height is established by hidden text below */}
		<div
			css={{ height: theme.fontSize[variant] }}
			style={{ visibility: 'hidden' }}
			aria-hidden="true"
		>
			A
		</div>
	</div>
);
