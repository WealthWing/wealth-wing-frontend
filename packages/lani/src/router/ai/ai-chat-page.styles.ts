import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

const mobile = '@media screen and (max-width: 599px)';
const tablet = '@media screen and (max-width: 799px)';

const focusRing = css`
	:focus-visible {
		outline: 2px solid ${theme.color.primary40};
		outline-offset: 2px;
	}
`;

export const aiChatPage = {
	root: css`
		background: linear-gradient(145deg, ${theme.color.darkBlue100}, ${theme.color.indigo100});
		border-radius: ${theme.borderRadius.radiusDefault};
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
		height: 100%;
		overflow: hidden;
		width: 100%;

		${mobile} {
			border-radius: 0;
		}
	`,
	header: css`
		align-items: center;
		background: ${theme.color.cardBackground100};
		border-bottom: ${theme.border.default};
		border-color: ${theme.color.indigo80};
		display: flex;
		justify-content: space-between;
		min-height: 84px;
		padding: ${theme.space.s16} ${theme.space.s28};
		z-index: 2;

		${mobile} {
			min-height: 60px;
			padding: ${theme.space.s8} ${theme.space.s16};
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
		background: transparent;
		border-radius: 50%;
		display: flex;
		flex: 0 0 auto;
		height: 40px;
		justify-content: center;
		width: 40px;

		${mobile} {
			height: 36px;
			width: 36px;
		}
	`,
	title: css`
		font: ${theme.font.h6};
	`,
	subtitle: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.sm};

		${mobile} {
			display: none;
		}
	`,
	desktopNewChat: css`
		display: block;

		${mobile} {
			display: none;
		}
	`,
	newChatContent: css`
		align-items: center;
		display: inline-flex;
		gap: ${theme.space.s8};
	`,
	mobileNewChat: css`
		display: none;

		${mobile} {
			display: block;

			button {
				min-height: 44px;
				min-width: 44px;
			}
		}
	`,
	feed: css`
		overflow-y: auto;
		overscroll-behavior: contain;
		scroll-behavior: smooth;
	`,
	feedInner: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s32};
		margin: 0 auto;
		max-width: 1080px;
		padding: ${theme.space.s32} ${theme.space.s24} ${theme.space.s40};
		width: 100%;

		${mobile} {
			gap: ${theme.space.s24};
			padding: ${theme.space.s24} ${theme.space.s16} ${theme.space.s32};
		}
	`,
	emptyState: css`
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s16};
		justify-content: center;
		margin: auto;
		max-width: 620px;
		min-height: 100%;
		padding: ${theme.space.s40} 0;
		text-align: center;
	`,
	emptyIcon: css`
		align-items: center;
		background: ${theme.gradient.primary};
		border-radius: 50%;
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

		${mobile} {
			align-items: stretch;
			flex-direction: column;
			width: 100%;
		}
	`,
	topicButton: css`
		${focusRing}
		align-items: center;
		background: ${theme.color.cardBackground100};
		border: ${theme.border.default};
		border-color: ${theme.color.indigo60};
		border-radius: ${theme.borderRadius.radiusXLarge};
		color: ${theme.color.textPrimary};
		cursor: pointer;
		display: inline-flex;
		font: ${theme.font.button};
		gap: ${theme.space.s8};
		justify-content: center;
		min-height: 44px;
		padding: ${theme.space.s10} ${theme.space.s16};
		transition: border-color 0.2s ease, background-color 0.2s ease;

		:hover {
			background: ${theme.color.indigo80};
			border-color: ${theme.color.primary60};
		}

		${mobile} {
			width: 100%;
		}
	`,
	turn: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s20};
	`,
	userPrompt: css`
		align-self: flex-end;
		background: linear-gradient(135deg, ${theme.color.darkBlue90}, ${theme.color.indigo100});
		border: ${theme.border.default};
		border-color: ${theme.color.primary60};
		border-radius: ${theme.borderRadius.radiusXLarge} ${theme.borderRadius.radiusXLarge}
			${theme.borderRadius.radiusSmall} ${theme.borderRadius.radiusXLarge};
		box-shadow: ${theme.shadow.default100};
		color: ${theme.color.textPrimary};
		font: ${theme.font.lg};
		max-width: 620px;
		padding: ${theme.space.s16} ${theme.space.s20} ${theme.space.s10};
		white-space: pre-wrap;

		${mobile} {
			font: ${theme.font.md};
			max-width: 88%;
		}
	`,
	userPromptText: css`
		margin-bottom: ${theme.space.s8};
	`,
	messageMeta: css`
		color: ${theme.color.textSecondary};
		display: block;
		font: ${theme.font.sm};
		text-align: right;

		span {
			color: ${theme.color.primary40};
			margin-left: ${theme.space.s4};
		}
	`,
	responseGroup: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s16};
	`,
	assistantMark: css`
		align-items: center;
		background: transparent;
		border-radius: 50%;
		display: flex;
		height: 24px;
		justify-content: center;
		width: 24px;
	`,
	report: css`
		background: linear-gradient(145deg, rgb(9 24 65 / 94%), rgb(35 31 75 / 96%));
		border: ${theme.border.default};
		border-color: ${theme.color.indigo60};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default100};
		overflow: hidden;
	`,
	reportHeader: css`
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: ${theme.space.s16} ${theme.space.s20} ${theme.space.s12};

		${mobile} {
			padding: ${theme.space.s16};
		}
	`,
	reportTitle: css`
		align-items: center;
		color: ${theme.color.secondary60};
		display: flex;
		font: ${theme.font.button};
		gap: ${theme.space.s8};

		:focus {
			outline: none;
		}

		:focus-visible {
			outline: 2px solid ${theme.color.primary40};
			outline-offset: 4px;
		}
	`,
	reportTime: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.sm};
	`,
	scopeBar: css`
		align-items: center;
		background: rgb(9 24 65 / 45%);
		border: ${theme.border.default};
		border-color: ${theme.color.indigo80};
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textSecondary};
		display: flex;
		font: ${theme.font.md};
		gap: ${theme.space.s8};
		margin: 0 ${theme.space.s20};
		padding: ${theme.space.s10} ${theme.space.s12};

		${mobile} {
			margin: 0 ${theme.space.s16};
		}
	`,
	analysisOverview: css`
		align-items: stretch;
		display: grid;
		grid-template-columns: minmax(220px, 0.8fr) minmax(0, 2fr);
		padding: ${theme.space.s24} ${theme.space.s20};

		${tablet} {
			grid-template-columns: minmax(190px, 0.75fr) minmax(0, 1.5fr);
		}

		${mobile} {
			gap: ${theme.space.s20};
			grid-template-columns: minmax(0, 1fr);
			padding: ${theme.space.s16};
		}
	`,
	featuredMetric: css`
		border-right: 1px solid ${theme.color.indigo80};
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: ${theme.space.s12} ${theme.space.s24} ${theme.space.s12} ${theme.space.s8};

		${mobile} {
			border-bottom: 1px solid ${theme.color.indigo80};
			border-right: 0;
			padding: ${theme.space.s8} 0 ${theme.space.s20};
		}
	`,
	metricValue: css`
		color: ${theme.color.textPrimary};
		font: ${theme.font.h2};
		letter-spacing: -0.03em;

		${mobile} {
			font: ${theme.font.h3};
		}
	`,
	metricLabel: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.lg};
		margin-top: ${theme.space.s4};
	`,
	metricTrend: css`
		align-items: center;
		color: ${theme.color.textSecondary};
		display: flex;
		flex-wrap: wrap;
		font: ${theme.font.md};
		gap: ${theme.space.s4};
		margin-top: ${theme.space.s20};

		strong {
			color: ${theme.color.secondary60};
			font: ${theme.font.h6};
		}
	`,
	chartPanel: css`
		min-width: 0;
		padding-left: ${theme.space.s24};

		${mobile} {
			padding-left: 0;
		}
	`,
	chart: css`
		height: 260px;
		margin: 0;
		width: 100%;

		${mobile} {
			height: 220px;
		}
	`,
	insight: css`
		border-color: ${theme.color.indigo80};
		border-top: ${theme.border.default};
		padding: ${theme.space.s20};

		${mobile} {
			padding: ${theme.space.s16};
		}
	`,
	sectionLabel: css`
		align-items: center;
		display: flex;
		font: ${theme.font.button};
		gap: ${theme.space.s8};
		margin-bottom: ${theme.space.s10};
	`,
	insightText: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.lg};
		line-height: 1.65;

		${mobile} {
			font: ${theme.font.md};
		}
	`,
	evidenceFooter: css`
		align-items: center;
		border-color: ${theme.color.indigo80};
		border-top: ${theme.border.default};
		display: flex;
		gap: ${theme.space.s12};
		justify-content: space-between;
		padding: ${theme.space.s16} ${theme.space.s20};

		${mobile} {
			align-items: center;
			padding: ${theme.space.s16};
		}
	`,
	evidenceActions: css`
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: ${theme.space.s12};
	`,
	evidenceSummary: css`
		align-items: center;
		color: ${theme.color.textSecondary};
		display: flex;
		font: ${theme.font.md};
		gap: ${theme.space.s8};
	`,
	textButton: css`
		${focusRing}
		background: transparent;
		border: 0;
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.primary40};
		cursor: pointer;
		font: ${theme.font.button};
		min-height: 44px;
		padding: ${theme.space.s8};
	`,
	mockBadge: css`
		background: ${theme.color.indigo80};
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textSecondary};
		font: ${theme.font.sm};
		padding: ${theme.space.s4} ${theme.space.s8};

		${mobile} {
			display: none;
		}
	`,
	evidenceList: css`
		border-color: ${theme.color.indigo80};
		border-top: ${theme.border.default};
		list-style: none;
		padding: 0 ${theme.space.s20} ${theme.space.s16};

		${mobile} {
			padding: 0 ${theme.space.s16} ${theme.space.s16};
		}
	`,
	evidenceCaption: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.sm};
		padding: ${theme.space.s12} 0;
	`,
	evidenceRow: css`
		align-items: center;
		border-top: 1px solid ${theme.color.indigo80};
		display: grid;
		font: ${theme.font.md};
		gap: ${theme.space.s12};
		grid-template-columns: minmax(0, 1fr) auto auto auto;
		padding: ${theme.space.s12} 0;

		${mobile} {
			align-items: start;
			grid-template-columns: minmax(0, 1fr) auto;

			> :nth-of-type(3) {
				grid-column: 1;
			}

			> :last-child {
				grid-column: 2;
				grid-row: 1;
			}
		}
	`,
	secondaryValue: css`
		color: ${theme.color.textSecondary};
	`,
	amount: css`
		font-weight: 600;
		text-align: right;
	`,
	suggestions: css`
		display: block;
	`,
	suggestionButtons: css`
		display: grid;
		gap: ${theme.space.s8};
		grid-template-columns: repeat(3, minmax(0, 1fr));

		${mobile} {
			align-items: stretch;
			flex-direction: column;
		}
	`,
	composerWrap: css`
		background: ${theme.color.cardBackground100};
		border-color: ${theme.color.indigo80};
		border-top: ${theme.border.default};
		padding: ${theme.space.s12} ${theme.space.s24}
			calc(${theme.space.s12} + env(safe-area-inset-bottom));
		z-index: 2;

		${mobile} {
			padding: ${theme.space.s8} ${theme.space.s16}
				calc(${theme.space.s8} + env(safe-area-inset-bottom));
		}
	`,
	composerInner: css`
		margin: 0 auto;
		max-width: 1080px;
		width: 100%;
	`,
	composer: css`
		background: linear-gradient(
			135deg,
			${theme.color.cardBackground90},
			${theme.color.darkBlue90}
		);
		border: ${theme.border.default};
		border-color: ${theme.color.indigo60};
		border-radius: ${theme.borderRadius.radiusDefault};
		display: grid;
		gap: ${theme.space.s8};
		padding: ${theme.space.s16};
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
		width: 100%;

		:focus-within {
			border-color: ${theme.color.primary60};
			box-shadow: 0 0 0 2px rgb(154 126 255 / 20%);
		}
	`,
	composerInputRow: css`
		align-items: flex-start;
		display: flex;
		gap: ${theme.space.s10};
	`,
	textarea: css`
		background: transparent;
		border: 0;
		color: ${theme.color.textPrimary};
		font: ${theme.font.lg};
		max-height: 128px;
		min-height: 40px;
		outline: none;
		resize: vertical;
		width: 100%;

		::placeholder {
			color: ${theme.color.indigo40};
		}

		${mobile} {
			font: ${theme.font.md};
			resize: none;
		}
	`,
	composerActions: css`
		align-items: center;
		display: flex;
		justify-content: space-between;

		button {
			min-height: 44px;
			min-width: 44px;
		}
	`,
	accountScope: css`
		align-items: center;
		background: ${theme.color.darkBlue90};
		border: 1px solid ${theme.color.indigo80};
		border-radius: ${theme.borderRadius.radiusMedium};
		color: ${theme.color.textSecondary};
		display: inline-flex;
		font: ${theme.font.sm};
		gap: ${theme.space.s4};
		min-height: 40px;
		padding: ${theme.space.s8} ${theme.space.s10};
	`,
	disclaimer: css`
		color: ${theme.color.indigo40};
		font: ${theme.font.sm};
		padding: ${theme.space.s8} ${theme.space.s8} 0;
	`,
	feedEnd: css`
		height: 1px;
		width: 100%;
	`
};
