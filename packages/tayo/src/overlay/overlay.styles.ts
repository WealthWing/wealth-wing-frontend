import { css, keyframes } from '@emotion/react';

import { zIndex } from '../constants';
import { theme } from '../theme';

const progress = keyframes`
  0% {
    background-position: 0% 50%;
    opacity: 0.3;
  }

  50% {
    background-position: 100% 50%;
    opacity: 0.5;
  }

  100% {
    background-position: 0% 50%;
    opacity: 0.3;
  }
`;

export const overlayLoader = css`
	animation: ${progress} 1.5s ease infinite;
	background: linear-gradient(to left, ${theme.color.black40}, ${theme.color.black60});
	background-size: 400% 400%;
	height: 100%;
	opacity: 0.5;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: ${zIndex.elevated};
`;
