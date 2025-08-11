import { css, keyframes } from '@emotion/react';

import { theme } from '../theme';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const wave = keyframes`
	0% {
		transform: translateX(-100%);
	}

	50% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(100%);
	}
`;
/* TODO: handle the ::after using the theme */
export const skeletonLoader = {
	root: css`
		animation: ${fadeIn} 0.3s ease-in-out;
		background-color: ${theme.color.cardBackground60};
		overflow: hidden;
		position: relative;
		width: 100%;

		&::after {
			animation: 3s linear 0.5s infinite normal none running ${wave};
			background: linear-gradient(
				90deg,
				transparent 0%,
				rgb(211 210 219 / 30%) 20%,
				rgb(211 210 219 / 50%) 50%,
				rgb(211 210 219 / 70%) 80%,
				transparent 100%
			);
			background-image: linear-gradient(
				90deg,
				transparent 0%,
				rgb(211 210 219 / 30%) 20%,
				rgb(211 210 219 / 50%) 50%,
				rgb(211 210 219 / 70%) 80%,
				transparent 100%
			);
			content: '';
			inset: 0;
			position: absolute;
			transform: translateX(-100%);
		}
	`
};
