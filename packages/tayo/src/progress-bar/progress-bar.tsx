import * as React from 'react';

import type { ProgressBarProps } from './progress-bar.definitions';
import { progressBarFill, progressBarTrack } from './progress-bar.styles';

const clampValue = (value: number) => {
	if (!Number.isFinite(value)) {
		return 0;
	}

	return Math.min(Math.max(value, 0), 100);
};

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
	({ value, variant = 'primary', ...restProps }, ref) => {
		const clampedValue = clampValue(value);

		return (
			<div
				{...restProps}
				aria-valuemax={100}
				aria-valuemin={0}
				aria-valuenow={clampedValue}
				css={progressBarTrack}
				ref={ref}
				role="progressbar"
			>
				<div css={progressBarFill(clampedValue, variant)} />
			</div>
		);
	}
);
