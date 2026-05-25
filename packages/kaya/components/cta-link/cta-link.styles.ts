import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const ctaLinkStyles = {
	root: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: theme.space.s8,
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transition: 'opacity 0.15s ease, transform 0.15s ease',
		lineHeight: 1
	}),

	icon: css({
		display: 'inline-flex',
		lineHeight: 0,
		flexShrink: 0
	})
};
