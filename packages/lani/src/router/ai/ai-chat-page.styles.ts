import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

const mobile = '@media screen and (max-width: 767px)';
const compactLaptop = '@media screen and (max-width: 1100px)';

const focusRing = css`
	:focus-visible {
		outline: 2px solid ${theme.color.primary40};
		outline-offset: 3px;
	}
`;

const bareButton = css`
	${focusRing}
	appearance: none;
	border: 0;
	cursor: pointer;
	font: inherit;
`;

export const aiChatPage = {
	root: css`
		background: radial-gradient(
				circle at 72% 22%,
				color-mix(in srgb, ${theme.color.darkBlue80} 42%, transparent),
				transparent 33rem
			),
			linear-gradient(
				145deg,
				${theme.color.darkBlue100} 0%,
				${theme.color.darkBlue90} 48%,
				${theme.color.indigo100} 100%
			);
		color: ${theme.color.textPrimary};
		display: grid;
		grid-template-columns: 286px minmax(0, 1fr);
		height: 100%;
		isolation: isolate;
		overflow: hidden;
		position: relative;
		width: 100%;

		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		${compactLaptop} {
			grid-template-columns: 250px minmax(0, 1fr);
		}

		${mobile} {
			display: block;
		}
	`,
	conversationRail: css`
		background: linear-gradient(180deg, ${theme.color.darkBlue100}, ${theme.color.indigo100});
		border-right: 1px solid color-mix(in srgb, ${theme.color.indigo60} 35%, transparent);
		display: flex;
		flex-direction: column;
		height: 100%;
		min-width: 0;
		overflow: hidden;
		position: relative;
		z-index: 5;

		${mobile} {
			box-shadow: 18px 0 48px color-mix(in srgb, ${theme.color.black100} 45%, transparent);
			left: 0;
			max-width: 320px;
			position: absolute;
			top: 0;
			transform: translateX(-105%);
			transition: transform 180ms ease;
			width: 86vw;
		}
	`,
	conversationRailOpen: css`
		${mobile} {
			transform: translateX(0);
		}
	`,
	railBackdrop: css`
		${bareButton}
		background: color-mix(in srgb, ${theme.color.darkBlue100} 66%, transparent);
		display: none;
		inset: 0;
		position: absolute;
		z-index: 4;
	`,
	railBackdropOpen: css`
		${mobile} {
			display: block;
		}
	`,
	railHeader: css`
		align-items: center;
		display: flex;
		font: ${theme.font.h6};
		justify-content: space-between;
		min-height: 82px;
		padding: ${theme.space.s20} ${theme.space.s24};

		${compactLaptop} {
			padding-inline: ${theme.space.s20};
		}
	`,
	railIconButton: css`
		${bareButton}
		align-items: center;
		background: transparent;
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textSecondary};
		display: inline-flex;
		height: 40px;
		justify-content: center;
		width: 40px;

		:hover {
			background: color-mix(in srgb, ${theme.color.primary100} 20%, transparent);
			color: ${theme.color.textPrimary};
		}
	`,
	railScroll: css`
		flex: 1;
		overflow-y: auto;
		overscroll-behavior: contain;
		padding: 0 ${theme.space.s12} ${theme.space.s24};
		scrollbar-color: ${theme.color.indigo80} transparent;
	`,
	backToApp: css`
		${focusRing}
		align-items: center;
		border-top: 1px solid color-mix(in srgb, ${theme.color.indigo60} 30%, transparent);
		color: ${theme.color.textSecondary};
		display: none;
		font: ${theme.font.button};
		gap: ${theme.space.s12};
		min-height: 58px;
		padding: ${theme.space.s12} ${theme.space.s24};

		span {
			color: ${theme.color.indigo40};
			font-size: 1.4rem;
			margin-left: auto;
		}

		${mobile} {
			display: flex;
		}
	`,
	topicNav: css`
		border-bottom: 1px solid color-mix(in srgb, ${theme.color.indigo60} 30%, transparent);
		border-top: 1px solid color-mix(in srgb, ${theme.color.indigo60} 30%, transparent);
		margin-bottom: ${theme.space.s20};

		button {
			${bareButton}
			align-items: center;
			background: transparent;
			border-bottom: 1px solid color-mix(in srgb, ${theme.color.indigo60} 22%, transparent);
			color: ${theme.color.textSecondary};
			display: grid;
			font: ${theme.font.md};
			gap: ${theme.space.s12};
			grid-template-columns: auto minmax(0, 1fr) auto;
			min-height: 56px;
			padding: ${theme.space.s12};
			text-align: left;
			width: 100%;

			:last-of-type {
				border-bottom: 0;
			}

			:hover {
				background: color-mix(in srgb, ${theme.color.cardBackground80} 32%, transparent);
				color: ${theme.color.textPrimary};
			}

			> :last-child {
				color: ${theme.color.indigo40};
				font-size: 1.4rem;
			}
		}
	`,
	chatShell: css`
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
		height: 100%;
		min-width: 0;
		overflow: hidden;
	`,
	header: css`
		align-items: center;
		background: color-mix(in srgb, ${theme.color.darkBlue100} 62%, transparent);
		border-bottom: 1px solid color-mix(in srgb, ${theme.color.indigo60} 13%, transparent);
		display: flex;
		justify-content: space-between;
		min-height: 96px;
		padding: ${theme.space.s16} ${theme.space.s32};
		z-index: 2;

		${mobile} {
			min-height: 68px;
			padding: ${theme.space.s10} ${theme.space.s12};
		}
	`,
	brand: css`
		align-items: center;
		display: flex;
		gap: ${theme.space.s12};
		min-width: 0;
	`,
	brandIcon: css`
		align-items: center;
		color: ${theme.color.secondary60};
		display: flex;
		flex: 0 0 auto;
		height: 40px;
		justify-content: center;
		width: 40px;

		${mobile} {
			display: none;
		}
	`,
	title: css`
		color: ${theme.color.textPrimary};
		font-weight: 600;
		letter-spacing: -0.02em;

		${mobile} {
			font: ${theme.font.h6};
			font-weight: 600;
		}
	`,
	subtitle: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.md};
		margin-top: ${theme.space.s2};

		${mobile} {
			display: none;
		}
	`,
	mobileMenuButton: css`
		${bareButton}
		align-items: center;
		background: transparent;
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textSecondary};
		display: none;
		height: 44px;
		justify-content: center;
		width: 44px;

		${mobile} {
			display: inline-flex;
		}
	`,
	headerActions: css`
		align-items: center;
		display: flex;
		gap: ${theme.space.s12};

		${mobile} {
			gap: ${theme.space.s8};

			> button:last-child {
				display: none;
			}
		}
	`,

	feed: css`
		min-height: 0;
		overflow-y: auto;
		overscroll-behavior: contain;
		scroll-behavior: smooth;
		scrollbar-color: ${theme.color.indigo80} transparent;
	`,
	feedInner: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s36};
		margin: 0 auto;
		max-width: 1080px;
		padding: ${theme.space.s24} ${theme.space.s28} ${theme.space.s32};
		width: 100%;

		${compactLaptop} {
			padding-inline: ${theme.space.s20};
		}

		${mobile} {
			gap: ${theme.space.s24};
			padding: ${theme.space.s20} ${theme.space.s12} ${theme.space.s24};
		}
	`,
	emptyState: css`
		align-items: center;
		color: ${theme.color.textSecondary};
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s16};
		justify-content: center;
		margin: auto;
		max-width: 620px;
		min-height: 52vh;
		padding: ${theme.space.s40} 0;
		text-align: center;
	`,
	emptyIcon: css`
		align-items: center;
		background: linear-gradient(
			135deg,
			color-mix(in srgb, ${theme.color.secondary100} 26%, transparent),
			color-mix(in srgb, ${theme.color.primary100} 30%, transparent)
		);
		border: 1px solid color-mix(in srgb, ${theme.color.secondary60} 32%, transparent);
		border-radius: 50%;
		color: ${theme.color.secondary60};
		display: flex;
		height: 64px;
		justify-content: center;
		width: 64px;
	`,
	quickTopics: css`
		display: flex;
		flex-wrap: wrap;
		gap: ${theme.space.s8};
		justify-content: center;
		margin-top: ${theme.space.s8};
	`,
	turn: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s20};
	`,
	userPrompt: css`
		align-self: flex-end;
		background: linear-gradient(135deg, ${theme.color.darkBlue80}, ${theme.color.indigo90});
		border: 1px solid color-mix(in srgb, ${theme.color.indigo60} 65%, transparent);
		border-radius: 18px;
		box-shadow: 0 12px 32px color-mix(in srgb, ${theme.color.black100} 16%, transparent);
		color: ${theme.color.textPrimary};
		font: ${theme.font.lg};
		max-width: 620px;
		padding: ${theme.space.s16} ${theme.space.s20} ${theme.space.s10};
		white-space: pre-wrap;

		${mobile} {
			border-radius: 16px;
			font: ${theme.font.md};
			max-width: 90%;
			padding: ${theme.space.s12} ${theme.space.s16} ${theme.space.s8};
		}
	`,
	userPromptText: css`
		line-height: 1.55;
	`,
	assistantMark: css`
		align-items: center;
		color: ${theme.color.secondary60};
		display: flex;
		height: 24px;
		justify-content: center;
		width: 24px;
	`,
	report: css`
		background: radial-gradient(
				circle at 85% 30%,
				color-mix(in srgb, ${theme.color.darkBlue80} 58%, transparent),
				transparent 28rem
			),
			linear-gradient(145deg, ${theme.color.darkBlue90}, ${theme.color.indigo100});
		border: 1px solid color-mix(in srgb, ${theme.color.indigo60} 54%, transparent);
		border-radius: 18px;
		box-shadow: 0 18px 44px color-mix(in srgb, ${theme.color.black100} 20%, transparent);
		overflow: hidden;
	`,
	reportHeader: css`
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: ${theme.space.s20} ${theme.space.s24} ${theme.space.s12};

		${mobile} {
			padding: ${theme.space.s16} ${theme.space.s16} ${theme.space.s12};
		}
	`,
	reportTitle: css`
		align-items: center;
		color: ${theme.color.secondary60};
		display: flex;
		font: ${theme.font.button};
		font-size: ${theme.fontSize.lg};
		gap: ${theme.space.s8};

		:focus {
			outline: none;
		}

		:focus-visible {
			outline: 2px solid ${theme.color.primary40};
			outline-offset: 4px;
		}
	`,
	genericAnswer: css`
		color: ${theme.color.textSecondary};
		padding: ${theme.space.s12} ${theme.space.s24} ${theme.space.s24};

		${mobile} {
			padding: ${theme.space.s8} ${theme.space.s16} ${theme.space.s20};
		}
	`,
	structuredResult: css`
		margin-top: ${theme.space.s20};
	`,
	responseError: css`
		background: color-mix(in srgb, ${theme.color.red100} 18%, transparent);
		border: 1px solid color-mix(in srgb, ${theme.color.red60} 45%, transparent);
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textPrimary};
		margin-top: ${theme.space.s16};
		padding: ${theme.space.s12};
	`,
	suggestionButton: css`
		${bareButton}
		align-items: center;
		background: color-mix(in srgb, ${theme.color.indigo100} 72%, transparent);
		border: 1px solid color-mix(in srgb, ${theme.color.indigo60} 64%, transparent);
		border-radius: 999px;
		color: ${theme.color.textSecondary};
		display: inline-flex;
		font: ${theme.font.md};
		gap: ${theme.space.s10};
		justify-content: center;
		min-height: 48px;
		padding: ${theme.space.s10} ${theme.space.s16};
		scroll-snap-align: start;
		transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
		width: 100%;

		:hover {
			background: color-mix(in srgb, ${theme.color.cardBackground80} 72%, transparent);
			border-color: ${theme.color.primary60};
			color: ${theme.color.textPrimary};
		}

		${mobile} {
			font: ${theme.font.sm};
			white-space: nowrap;
		}
	`,
	composerWrap: css`
		background: linear-gradient(
			180deg,
			transparent,
			color-mix(in srgb, ${theme.color.darkBlue100} 93%, transparent) 18%
		);
		padding: ${theme.space.s12} ${theme.space.s28}
			calc(${theme.space.s12} + env(safe-area-inset-bottom));
		z-index: 2;

		${mobile} {
			padding: ${theme.space.s8} ${theme.space.s12}
				calc(${theme.space.s8} + env(safe-area-inset-bottom));
		}
	`,
	composerInner: css`
		margin: 0 auto;
		max-width: 1040px;
		width: 100%;
	`,
	composer: css`
		background: linear-gradient(135deg, ${theme.color.darkBlue80}, ${theme.color.indigo90});
		border: 1px solid color-mix(in srgb, ${theme.color.indigo60} 65%, transparent);
		border-radius: 18px;
		box-shadow: 0 12px 44px color-mix(in srgb, ${theme.color.black100} 34%, transparent);
		display: grid;
		gap: ${theme.space.s8};
		padding: ${theme.space.s16};
		transition: border-color 160ms ease, box-shadow 160ms ease;
		width: 100%;

		:focus-within {
			border-color: ${theme.color.primary60};
			box-shadow: 0 0 0 2px color-mix(in srgb, ${theme.color.primary60} 18%, transparent),
				0 12px 44px color-mix(in srgb, ${theme.color.black100} 34%, transparent);
		}

		${mobile} {
			border-radius: 16px;
			padding: ${theme.space.s12};
		}
	`,
	composerInputRow: css`
		align-items: flex-start;
		display: flex;
		gap: ${theme.space.s10};

		> div {
			flex: 1;
			min-width: 0;
		}

		> div > div {
			background: transparent;
			box-shadow: none;
			padding: 0;
		}
	`,
	textarea: css`
		background: transparent;
		border: 0;
		color: ${theme.color.textPrimary};
		font: ${theme.font.lg};
		line-height: 1.5;
		max-height: 128px;
		min-height: 32px;
		outline: none;
		padding: 0;
		resize: vertical;
		width: 100%;

		::placeholder {
			color: ${theme.color.indigo40};
		}

		${mobile} {
			font: ${theme.font.md};
			min-height: 26px;
			resize: none;
		}
	`,
	composerActions: css`
		align-items: center;
		display: flex;
		justify-content: space-between;

		button {
			border-radius: 50%;
			min-height: 44px;
			min-width: 44px;
		}
	`,
	accountScope: css`
		align-items: center;
		background: color-mix(in srgb, ${theme.color.indigo100} 68%, transparent);
		border: 1px solid color-mix(in srgb, ${theme.color.indigo60} 45%, transparent);
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textSecondary};
		display: inline-flex;
		font: ${theme.font.sm};
		gap: ${theme.space.s8};
		min-height: 38px;
		padding: ${theme.space.s8} ${theme.space.s10};
	`,
	disclaimer: css`
		color: ${theme.color.indigo40};
		font: ${theme.font.sm};
		padding: ${theme.space.s8} ${theme.space.s8} 0;
		text-align: center;

		${mobile} {
			display: none;
		}
	`,
	historyUnavailable: css`
		color: ${theme.color.indigo40};
		line-height: 1.5;
		padding: ${theme.space.s8} ${theme.space.s12};
	`,
	feedEnd: css`
		height: 1px;
		width: 100%;
	`
};
