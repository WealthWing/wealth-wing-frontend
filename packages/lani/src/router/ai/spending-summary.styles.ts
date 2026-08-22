import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

const mobile = '@media screen and (max-width: 767px)';
const divider = `1px solid color-mix(in srgb, ${theme.color.indigo60} 30%, transparent)`;

export const spendingSummary = {
	root: css`
		background: radial-gradient(
				circle at 82% 24%,
				color-mix(in srgb, ${theme.color.darkBlue80} 58%, transparent),
				transparent 30rem
			),
			linear-gradient(145deg, ${theme.color.darkBlue90}, ${theme.color.indigo100});
		border: 1px solid color-mix(in srgb, ${theme.color.indigo60} 54%, transparent);
		border-radius: 18px;
		box-shadow: 0 18px 44px color-mix(in srgb, ${theme.color.black100} 20%, transparent);
		color: ${theme.color.textPrimary};
		overflow: hidden;
		padding: ${theme.space.s20};

		${mobile} {
			border-radius: ${theme.borderRadius.radiusLarge};
			padding: ${theme.space.s16};
		}
	`,
	header: css`
		align-items: flex-start;
		display: flex;
		gap: ${theme.space.s12};
		margin-bottom: ${theme.space.s16};
	`,
	sparkle: css`
		align-items: center;
		background: color-mix(in srgb, ${theme.color.primary100} 20%, transparent);
		border: 1px solid color-mix(in srgb, ${theme.color.primary60} 55%, transparent);
		border-radius: 50%;
		color: ${theme.color.secondary60};
		display: flex;
		flex: 0 0 auto;
		height: 40px;
		justify-content: center;
		width: 40px;
	`,
	headingContent: css`
		min-width: 0;
	`,
	answer: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.md};
		margin-bottom: ${theme.space.s20};
		padding: 0 ${theme.space.s4};

		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		strong {
			color: ${theme.color.textPrimary};
		}

		${mobile} {
			font: ${theme.font.sm};
			padding: 0;
		}
	`,
	title: css`
		color: ${theme.color.textPrimary};
		font: ${theme.font.h5};
		font-weight: 600;

		:focus {
			outline: none;
		}

		:focus-visible {
			outline: 2px solid ${theme.color.primary40};
			outline-offset: 4px;
		}

		${mobile} {
			font: ${theme.font.h6};
			font-weight: 600;
		}
	`,
	mobileScope: css`
		color: ${theme.color.textSecondary};
		display: none;
		font: ${theme.font.sm};
		line-height: 1.45;
		margin-top: ${theme.space.s2};

		${mobile} {
			display: block;
		}
	`,
	panel: css`
		background: color-mix(in srgb, ${theme.color.indigo100} 58%, transparent);
		border: ${divider};
		border-radius: ${theme.borderRadius.radiusLarge};
		overflow: hidden;
	`,
	hero: css`
		align-items: center;
		display: grid;
		grid-template-columns: minmax(260px, 1.1fr) minmax(250px, 1fr) minmax(230px, 0.8fr);
		padding: ${theme.space.s24};

		> * + * {
			border-left: ${divider};
		}

		${mobile} {
			align-items: stretch;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding: ${theme.space.s12};
		}
	`,
	primaryMetric: css`
		min-width: 0;
		padding: 0 ${theme.space.s24};

		:first-of-type {
			padding-left: 0;
		}

		${mobile} {
			padding: 0 ${theme.space.s12};

			:first-of-type {
				padding-left: 0;
			}

			:nth-of-type(2) {
				padding-right: 0;
			}
		}
	`,
	scope: css`
		color: ${theme.color.textSecondary};
		display: flex;
		flex-direction: column;
		font: ${theme.font.md};
		gap: ${theme.space.s12};
		padding-left: ${theme.space.s28};

		span {
			align-items: center;
			display: flex;
			gap: ${theme.space.s10};
		}

		svg {
			color: ${theme.color.indigo40};
			flex: 0 0 auto;
		}

		small {
			color: ${theme.color.indigo40};
			font: ${theme.font.sm};
			padding-left: calc(${theme.space.s20} + ${theme.space.s10});
		}

		${mobile} {
			display: none;
		}
	`,
	supportingGrid: css`
		border-top: ${divider};
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		padding: ${theme.space.s20} ${theme.space.s24};

		> * + * {
			border-left: ${divider};
		}

		${mobile} {
			padding: ${theme.space.s12};
		}
	`,
	supportingMetric: css`
		min-width: 0;
		padding: 0 ${theme.space.s24};

		:first-of-type {
			padding-left: 0;
		}

		${mobile} {
			padding: 0 ${theme.space.s8};

			:first-of-type {
				padding-left: 0;
			}

			:last-of-type {
				padding-right: 0;
			}
		}
	`,
	detailsExpand: css`
		background: transparent;
		border: 0;
		border-radius: 0;
		border-top: ${divider};
	`,
	details: css`
		border-top: ${divider};
	`,
	calculation: css`
		align-items: center;
		background: color-mix(in srgb, ${theme.color.cardBackground80} 30%, transparent);
		display: grid;
		grid-template-columns: 1fr auto 1fr auto 1fr;
		padding: ${theme.space.s16} ${theme.space.s24};
		text-align: center;

		b {
			color: ${theme.color.indigo40};
			font: ${theme.font.h6};
		}

		${mobile} {
			gap: ${theme.space.s4};
			padding: ${theme.space.s12} ${theme.space.s8};
		}
	`,
	averages: css`
		border-top: ${divider};
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		padding: ${theme.space.s20} ${theme.space.s24};

		> * {
			min-width: 0;
			padding: 0 ${theme.space.s24};
		}

		> :first-of-type {
			padding-left: 0;
		}

		> * + * {
			border-left: ${divider};
		}

		${mobile} {
			grid-template-columns: minmax(0, 1fr);
			padding: ${theme.space.s16} ${theme.space.s12};

			> * {
				padding: 0;
			}

			> * + * {
				border-left: 0;
				border-top: ${divider};
				margin-top: ${theme.space.s16};
				padding-top: ${theme.space.s16};
			}
		}
	`
};
