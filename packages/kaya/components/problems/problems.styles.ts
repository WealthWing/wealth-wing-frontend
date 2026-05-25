import { css } from '@emotion/react';
import { mqValues } from '@wealth-wing/tayo/src/constants/media-queries';
import { theme } from '@wealth-wing/tayo/src/theme/dark-theme';

import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_LARGE_UP = `@media (min-width: ${mqValues.tabletLarge}px)`;
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

const withAlpha = (color: string, alphaPercent: number) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

export const problemsStyles = {
	root: css({
		backgroundColor: theme.color.darkBlue90,
		padding: `${theme.space.s96} 0`,
		[TABLET_BREAK]: {
			padding: `${theme.space.s64} 0`
		},
		[MOBILE_BREAK]: {
			padding: `${theme.space.s40} 0`
		}
	}),

	inner: css({
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `0 ${theme.space.s24}`,
		[MOBILE_BREAK]: {
			padding: `0 ${theme.space.s16}`
		}
	}),

	header: css({
		marginBottom: theme.space.s64,
		maxWidth: '640px',
		[TABLET_BREAK]: {
			marginBottom: theme.space.s40
		},
		[MOBILE_BREAK]: {
			marginBottom: theme.space.s32
		}
	}),

	eyebrow: css({
		margin: `0 0 ${theme.space.s8}`,
		font: theme.font.sm,
		color: theme.color.primary100,
		letterSpacing: '0.08em',
		textTransform: 'uppercase'
	}),

	heading: css({
		margin: `0 0 ${theme.space.s16}`,
		font: theme.font.h2,
		color: theme.color.textPrimary,
		letterSpacing: '-0.03em',
		[TABLET_BREAK]: {
			font: theme.font.h3,
			letterSpacing: '-0.025em'
		},
		[MOBILE_BREAK]: {
			font: theme.font.h4,
			letterSpacing: '-0.02em'
		}
	}),

	subheading: css({
		margin: 0,
		font: theme.font.md,
		color: theme.color.textSecondary,
		lineHeight: 1.6
	}),

	// ── Comparison panel ─────────────────────────────────────────────────────

	comparisonPanel: css({
		borderRadius: theme.borderRadius.radiusLarge,
		overflow: 'hidden',
		border: theme.border.default
	}),

	// Column headers row — two equal columns
	columnHeaderRow: css({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		[MOBILE_BREAK]: {
			gridTemplateColumns: '1fr'
		}
	}),

	columnHeader: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s10,
		padding: `${theme.space.s16} ${theme.space.s24}`,
		font: theme.font.h6,
		letterSpacing: '-0.01em'
	}),

	trapColumnHeader: css({
		backgroundColor: theme.color.cardBackground90,
		color: theme.color.textSecondary,
		borderBottom: `1px solid ${withAlpha(theme.color.indigo60, 30)}`
	}),

	fixColumnHeader: css({
		backgroundColor: withAlpha(theme.color.primary100, 10),
		color: theme.color.primary100,
		borderBottom: `1px solid ${withAlpha(theme.color.primary100, 20)}`
	}),

	trapHeaderIcon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		backgroundColor: withAlpha(theme.color.indigo60, 20),
		fontSize: '0.65rem',
		color: theme.color.indigo40,
		flexShrink: 0
	}),

	fixHeaderIcon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		backgroundColor: withAlpha(theme.color.primary100, 15),
		fontSize: '0.65rem',
		color: theme.color.primary100,
		flexShrink: 0
	}),

	// Rows wrapper — stack rows vertically
	rowsWrapper: css({
		display: 'flex',
		flexDirection: 'column'
	}),

	// Each FrictionRow is its own two-column grid so cells align perfectly
	row: css({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		[MOBILE_BREAK]: {
			gridTemplateColumns: '1fr'
		}
	}),

	trapCell: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: theme.space.s12,
		backgroundColor: theme.color.cardBackground90,
		padding: `${theme.space.s20} ${theme.space.s24}`,
		borderBottom: `1px solid ${withAlpha(theme.color.indigo60, 18)}`,
		borderRight: `1px solid ${withAlpha(theme.color.indigo60, 18)}`,
		[MOBILE_BREAK]: {
			borderRight: 'none'
		},
		'&:last-of-type': {
			borderBottom: 'none'
		}
	}),

	fixCell: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: theme.space.s12,
		backgroundColor: withAlpha(theme.color.primary100, 5),
		padding: `${theme.space.s20} ${theme.space.s24}`,
		borderBottom: `1px solid ${withAlpha(theme.color.primary100, 12)}`,
		'&:last-of-type': {
			borderBottom: 'none'
		}
	}),

	cellText: css({
		margin: 0,
		font: theme.font.md,
		color: theme.color.textSecondary,
		lineHeight: 1.6,
		flex: 1
	}),

	bullet: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		backgroundColor: withAlpha(theme.color.indigo60, 15),
		fontSize: '0.6rem',
		color: theme.color.indigo40,
		flexShrink: 0,
		marginTop: '2px'
	}),

	checkmark: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		backgroundColor: withAlpha(theme.color.primary100, 15),
		fontSize: '0.65rem',
		color: theme.color.primary100,
		flexShrink: 0,
		marginTop: '2px'
	})
};
