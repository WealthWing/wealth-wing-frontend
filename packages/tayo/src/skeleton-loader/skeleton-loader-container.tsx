import { Space, theme } from '../theme';
import { skeletonLoaderContainerDefault } from './skeleton-loader-container.styles';

export type SkeletonLoaderContainerProps = {
	size?: number;
	className?: string;
	renderComponent: (index: number) => JSX.Element;
	containerPadding?: Space;
	gap?: Space;
	wrap?: 'wrap' | 'nowrap';
	direction?: 'row' | 'column';
};

export const SkeletonLoaderContainer = ({
	size = 10,
	className,
	renderComponent,
	containerPadding,
	gap,
	wrap = 'nowrap',
	direction = 'column'
}: SkeletonLoaderContainerProps) => {
	const fillArray = Array.from({ length: size }, (_, i) => i);

	return (
		<div
			css={[
				className || skeletonLoaderContainerDefault,
				{
					padding: containerPadding && theme.space[containerPadding],
					gap: gap && theme.space[gap],
					flexDirection: direction,
					flexWrap: wrap
				}
			]}
		>
			{fillArray.map((c) => renderComponent(c))}
		</div>
	);
};
