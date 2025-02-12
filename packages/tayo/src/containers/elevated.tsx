import { css } from '@emotion/react';
import React from 'react';

/**
 * Used to "elevate" an interactive element above another interactive element
 * so that the first interactive element can still get mouse or click events
 */
export const Elevated = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			> * {
				position: relative;
				z-index: 2;
			}
		`}
	>
		{children}
	</div>
);
