import { css } from '@emotion/react';

import { theme } from '../../theme';

export const formTheme = {
	borderColor: theme.color.black40,
	borderColorFocused: theme.color.cardBackground80,
	borderColorFocusedDark: theme.color.cardBackground90,
	borderColorError: theme.color.red80,
	borderRadius: theme.borderRadius.radiusMedium,
	borderWidth: '1px',
	borderWidthFocused: '2px',
	fontColor: theme.color.textPrimary,
	fontColorPlaceholder: theme.color.black40,
	backgroundHover: theme.color.black10
};

const boxShadow = theme.shadow.default200;
const borderRadius = theme.borderRadius.radiusMedium;
export const modalOverlayColor = 'rgba(0, 0, 0, 0.25)';
// Colors
const backgroundColor = theme.color.cardBackground90;
const borderColor = theme.color.cardBackground100;

const colorMain = theme.color.textPrimary;
const colorMuted = theme.color.textSecondary;

const selectedBackground = theme.color.cardBackground80;
const selectedBackgroundLight = theme.color.cardBackground60;
const selectedBackgroundDark = theme.color.cardBackground90;
const selectedColor = theme.color.textPrimary;

const lightBackground = theme.color.darkBlue60;
const lightBackgroundHover = theme.color.darkBlue60;
const lightColor = theme.color.darkBlue10;

// TODO: if we ever want to support hightlighted or holidays we should update these
const highlightedColor = '#3dcc4a';
const holidaysColor = '#ff6803';

// Font
const font = theme.font.lg;

// Space
const dayMargin = '0.166rem';
const itemSize = '1.7rem';
const margin = '0.4rem';
const navigationButtonSize = '36px';

const navigationArrow = css`
	background-image: url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z" fill="%23d3d2db"/%3E%3C/svg%3E');
	background-position: center center;
	background-size: 20px 20px;
	content: '';
	display: block;
	height: 16px;
	opacity: 0.7;
	position: absolute;
	top: 6px;
	width: 16px;
`;
export const datePicker = css`
	/* stylelint comment must be within css block to work apparently */
	/* stylelint-disable no-descending-specificity */
	/* stylelint-disable order/properties-alphabetical-order */
	width: 100%;

	/* Firefox */
	scrollbar-color: ${theme.color.black40} transparent;
	scrollbar-width: auto;

	/* Chrome, Edge, and Safari */
	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${theme.color.black40};
		border: none;
		border-radius: ${borderRadius};
	}

	.react-datepicker-wrapper {
		display: block;
		padding: 0;
		border: 0;

		input {
			border-radius: 1rem;
		}
	}

	.react-datepicker {
		font: ${font};
		background-color: ${theme.color.cardBackground60};
		color: ${colorMain};
		border: 1px solid ${borderColor};
		border-radius: ${borderRadius};
		display: inline-block;
		position: relative;
		box-shadow: ${boxShadow};
		line-height: initial;
	}

	.react-datepicker--time-only {
		.react-datepicker__time-container {
			border-left: 0;
		}

		.react-datepicker__time,
		.react-datepicker__time-box {
			border-bottom-left-radius: ${borderRadius};
			border-bottom-right-radius: ${borderRadius};
		}
	}

	.react-datepicker-popper {
		z-index: 1;
		line-height: 0;

		&[data-placement^='bottom'] {
			.react-datepicker__triangle {
				color: ${backgroundColor};
				fill: ${backgroundColor};
				stroke: ${theme.color.black20};
			}
		}

		&[data-placement^='top'] {
			.react-datepicker__triangle {
				color: ${backgroundColor};
				fill: ${backgroundColor};
				stroke: ${theme.color.black20};
			}
		}
	}

	.react-datepicker__header {
		background-color: ${backgroundColor};
		border-bottom: 1px solid ${borderColor};
		border-top-left-radius: ${borderRadius};
		padding: 8px 0;
		min-height: 42px;
		text-align: center;
		position: relative;

		&--time {
			padding-bottom: 8px;
			padding-left: 5px;
			padding-right: 5px;

			&:not(&--only) {
				border-top-left-radius: 0;
			}
		}

		&:not(&--has-time-select) {
			border-top-right-radius: ${borderRadius};
		}
	}

	.react-datepicker__year-dropdown-container--select,
	.react-datepicker__month-dropdown-container--select,
	.react-datepicker__month-year-dropdown-container--select,
	.react-datepicker__year-dropdown-container--scroll,
	.react-datepicker__month-dropdown-container--scroll,
	.react-datepicker__month-year-dropdown-container--scroll {
		display: inline-block;
		margin: 0 4px;
	}

	.react-datepicker__current-month,
	.react-datepicker-time__header,
	.react-datepicker-year-header {
		color: ${colorMain};
		font-size: ${theme.fontSize.h6};
		margin-top: 0;
	}

	.react-datepicker__current-month,
	.react-datepicker-time__header {
		padding: 0.4rem 0;
	}

	.react-datepicker-year-header {
		padding: 0.75rem 0;
	}

	.react-datepicker-time__header {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.react-datepicker__navigation {
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		height: ${navigationButtonSize};
		justify-content: center;
		overflow: hidden;
		padding: 0;
		position: absolute;
		text-align: center;
		text-indent: -999em;
		top: 3px;
		width: ${navigationButtonSize};
		z-index: 1;

		&--previous {
			left: 2px;
		}

		&--next {
			right: 2px;

			&--with-time:not(&--with-today-button) {
				right: 85px;
			}
		}

		&--years {
			position: relative;
			top: 0;
			display: block;
			margin-left: auto;
			margin-right: auto;

			&-previous {
				top: 4px;
			}

			&-upcoming {
				top: -4px;
			}
		}

		&:hover {
			*::before {
				opacity: 1;
			}
		}
	}

	.react-datepicker__navigation-icon {
		position: relative;
		top: -1px;
		font-size: 20px;
		width: 0;

		&::before {
			${navigationArrow}
		}

		&--next {
			left: -2px;

			&::before {
				transform: rotate(-90deg);
				left: -7px;
			}
		}

		&--previous {
			right: -2px;

			&::before {
				transform: rotate(90deg);
				right: -7px;
			}
		}
	}

	.react-datepicker__month-container {
		float: left;
	}

	.react-datepicker__month-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto;
	}

	.react-datepicker__year {
		margin: ${margin};
		text-align: center;

		&-wrapper {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: auto;
		}

		.react-datepicker__year-text {
			display: inline-block;
			margin: 2px;
		}
	}

	.react-datepicker__month {
		margin: ${margin};
		text-align: center;

		.react-datepicker__month-text,
		.react-datepicker__quarter-text {
			display: inline-block;
			width: 4rem;
			margin: 2px;
		}
	}

	.react-datepicker__input-time-container {
		clear: both;
		width: 100%;
		float: left;
		margin: 5px 0 10px 15px;
		text-align: left;

		.react-datepicker-time__caption {
			display: inline-block;
		}

		.react-datepicker-time__input-container {
			display: inline-block;

			.react-datepicker-time__input {
				display: inline-block;
				margin-left: 10px;

				input {
					width: auto;
				}

				input[type='time']::-webkit-inner-spin-button,
				input[type='time']::-webkit-outer-spin-button {
					appearance: none;
					margin: 0;
				}

				input[type='time'] {
					appearance: textfield;
				}
			}

			.react-datepicker-time__delimiter {
				margin-left: 5px;
				display: inline-block;
			}
		}
	}

	.react-datepicker__time-container {
		float: right;
		border-left: 1px solid ${borderColor};
		width: 85px;

		&--with-today-button {
			display: inline;
			border: 1px solid ${theme.color.black40};
			border-radius: ${borderRadius};
			position: absolute;
			right: -87px;
			top: 0;
		}

		.react-datepicker__time {
			position: relative;
			background: white;
			border-bottom-right-radius: ${borderRadius};

			.react-datepicker__time-box {
				width: 85px;
				overflow-x: hidden;
				margin: 0 auto;
				text-align: center;
				border-bottom-right-radius: ${borderRadius};

				ul.react-datepicker__time-list {
					list-style: none;
					margin: 0;
					height: calc(195px + (${itemSize} / 2));
					overflow-y: scroll;
					padding-right: 0;
					padding-left: 0;
					width: 100%;
					box-sizing: content-box;

					li.react-datepicker__time-list-item {
						padding: ${theme.space.s8};
						padding-right: ${theme.space.s12};
						white-space: nowrap;

						&:hover {
							cursor: pointer;
							background-color: ${lightBackground};
							color: ${lightColor};
						}

						&--selected {
							background-color: ${selectedBackground};
							color: white;

							&:hover {
								background-color: ${selectedBackground};
								color: ${selectedColor};
							}
						}

						&--disabled {
							color: ${colorMuted};

							&:hover {
								cursor: default;
								color: ${colorMuted};
								background-color: transparent;
							}
						}
					}
				}
			}
		}
	}

	.react-datepicker__week-number {
		color: ${colorMuted};
		display: inline-block;
		width: ${itemSize};
		line-height: ${itemSize};
		text-align: center;
		margin: ${dayMargin};

		&.react-datepicker__week-number--clickable {
			cursor: pointer;

			&:not(
					.react-datepicker__week-number--selected,
					.react-datepicker__week-number--keyboard-selected
				):hover {
				border-radius: ${borderRadius};
				background-color: ${backgroundColor};
			}
		}

		&--selected {
			border-radius: ${borderRadius};
			background-color: ${selectedBackground};
			color: ${selectedColor};

			&:hover {
				background-color: ${selectedBackgroundDark};
			}
		}

		&--keyboard-selected {
			border-radius: ${borderRadius};
			background-color: ${selectedBackgroundLight};
			color: #fff;

			&:hover {
				background-color: ${selectedBackgroundDark};
				color: ${lightColor};
			}
		}
	}

	.react-datepicker__day-names {
		white-space: nowrap;
		margin-bottom: -8px;
	}

	.react-datepicker__week {
		white-space: nowrap;
	}

	.react-datepicker__day-name,
	.react-datepicker__day,
	.react-datepicker__time-name {
		display: inline-block;
		width: ${itemSize};
		line-height: ${itemSize};
		text-align: center;
		margin: ${dayMargin};
	}

	.react-datepicker__day {
		color: ${colorMain};

		&--outside-month {
			color: ${colorMuted};
		}
	}

	.react-datepicker__day-name,
	.react-datepicker__time-name {
		color: ${colorMuted};
	}

	.react-datepicker__day,
	.react-datepicker__month-text,
	.react-datepicker__quarter-text,
	.react-datepicker__year-text {
		cursor: pointer;
		border-radius: ${borderRadius};

		&:hover {
			background-color: ${lightBackground};
			color: ${lightColor};
		}

		&--highlighted {
			background-color: ${highlightedColor};
			color: #fff;

			&:hover {
				background-color: #32be3f;
			}

			&-custom-1 {
				color: magenta;
			}

			&-custom-2 {
				color: green;
			}
		}

		&--holidays {
			position: relative;
			background-color: ${holidaysColor};
			color: #fff;

			.overlay {
				background-color: #333;
				border-radius: 4px;
				bottom: 100%;
				color: #fff;
				left: 50%;
				opacity: 0;
				padding: 4px;
				position: absolute;
				transform: translateX(-50%);
				transition: visibility 0s, opacity 0.3s ease-in-out;
				visibility: hidden;
				white-space: nowrap;
			}

			&:hover {
				background-color: #cf5300;
			}

			&:hover .overlay {
				visibility: visible;
				opacity: 1;
			}
		}

		&--in-selecting-range {
			background-color: ${lightBackground};
			color: ${lightColor};

			&:hover {
				background-color: ${lightBackgroundHover};
			}
		}

		&--in-range {
			background-color: ${theme.color.indigo20};
			color: ${lightColor};

			&:hover {
				background-color: ${lightBackgroundHover};
			}
		}

		&--selecting-range-start:not(&--selected),
		&--selecting-range-end:not(&--selected) {
			box-shadow: 0 0 0 1px ${lightColor};
		}

		&--range-start,
		&--range-end,
		&--selected {
			background-color: ${selectedBackground} !important;
			color: ${selectedColor} !important;

			&:hover {
				background-color: ${selectedBackgroundDark} !important;
			}
		}

		&--keyboard-selected {
			background-color: ${lightBackground};
			color: ${lightColor};

			&:hover {
				background-color: ${selectedBackgroundDark};
				color: ${selectedColor};
			}
		}

		&--in-selecting-range:not(&--in-range) {
			background-color: ${lightBackground};
			color: ${lightColor};
		}

		&--in-range:not(&--in-selecting-range) {
			.react-datepicker__month--selecting-range &,
			.react-datepicker__year--selecting-range & {
				background-color: ${backgroundColor};
				color: ${colorMain};
			}
		}

		&--disabled {
			cursor: default;
			color: ${colorMuted};

			&:hover {
				color: ${colorMuted};
				background-color: transparent;
			}

			.overlay {
				background-color: #333;
				border-radius: 4px;
				bottom: 70%;
				color: #fff;
				left: 50%;
				opacity: 0;
				padding: 4px;
				position: absolute;
				transform: translateX(-50%);
				transition: visibility 0s, opacity 0.3s ease-in-out;
				visibility: hidden;
				white-space: nowrap;
			}
		}
	}

	.react-datepicker__input-container {
		position: relative;
		align-items: center;
		display: flex;
		width: 100%;

		.react-datepicker__calendar-icon {
			box-sizing: content-box;
			left: 0;
			padding: 0.5rem 0.5rem 0.5rem 0;
			position: absolute;
			top: 0;
		}
	}

	.react-datepicker__view-calendar-icon {
		> div:first-of-type {
			left: 0;
			position: absolute;
			top: 0;
		}

		input {
			padding: 6px 10px 5px 24px;
		}
	}

	.react-datepicker__year-read-view,
	.react-datepicker__month-read-view,
	.react-datepicker__month-year-read-view {
		margin: ${theme.space.s8} 0;
		border: 1px solid ${theme.color.black40};
		padding: ${theme.space.s4} ${theme.space.s8};
		border-radius: ${borderRadius};
		position: relative;
		display: flex;
		align-items: center;
		gap: ${theme.space.s4};
		flex-direction: row-reverse;

		.react-datepicker__year-read-view--down-arrow,
		.react-datepicker__month-read-view--down-arrow,
		.react-datepicker__month-year-read-view--down-arrow {
			position: relative;
			display: block;
			top: 0;
		}

		&:hover {
			background: ${theme.color.black10};
			cursor: pointer;

			.react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view--down-arrow {
				border-top-color: ${theme.color.black20};
			}
		}

		&--down-arrow {
			${navigationArrow};
		}
	}

	.react-datepicker__year-dropdown,
	.react-datepicker__month-dropdown,
	.react-datepicker__month-year-dropdown {
		background-color: ${backgroundColor};
		border-radius: ${borderRadius};
		border: 1px solid ${borderColor};
		left: 25%;
		position: absolute;
		padding: ${theme.space.s2};
		font-size: ${theme.fontSize.button};
		text-align: center;
		top: 30px;
		width: 50%;
		z-index: 1;
		box-shadow: ${theme.shadow.default100};

		&:hover {
			cursor: pointer;
		}

		&--scrollable {
			height: 150px;
			overflow-y: scroll;
		}
	}

	.react-datepicker__year-option,
	.react-datepicker__month-option,
	.react-datepicker__month-year-option {
		line-height: 20px;
		width: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;

		&:last-of-type {
			user-select: none;
		}

		.react-datepicker__navigation--years-previous,
		.react-datepicker__navigation--years-upcoming {
			border-bottom-color: ${theme.color.indigo90};
			background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z" fill="%233F434A"/></svg>');
			background-repeat: no-repeat;
			background-position: center top;
			background-size: 16px 16px;
			height: 24px;
		}

		.react-datepicker__navigation--years-upcoming {
			transform: rotate(180deg);
		}

		&:hover {
			background-color: ${lightBackground};
			color: ${lightColor};
		}

		&--selected {
			position: absolute;
			left: 15px;
		}

		&--selected_year {
			background: ${selectedBackground};
			color: ${selectedColor};

			&:hover {
				background: ${selectedBackgroundDark};
				color: ${selectedColor};
			}
		}
	}

	.react-datepicker__close-icon {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: flex;
		height: 100%;
		outline: 0;
		padding: 0 6px 0 0;
		vertical-align: middle;

		&::after {
			background-color: ${lightBackground};
			border-radius: 50%;
			color: ${lightColor};
			background-image: url("data:image/svg+xml, %3Csvg viewBox='0 0 128 128' fill='%233553D4' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M98.8284 29.1716C100.391 30.7337 100.391 33.2663 98.8284 34.8284L34.8284 98.8284C33.2663 100.391 30.7337 100.391 29.1716 98.8284C27.6095 97.2663 27.6095 94.7337 29.1716 93.1716L93.1716 29.1716C94.7337 27.6095 97.2663 27.6095 98.8284 29.1716Z' stroke-width='3px' stroke='%233553D4' /%3E%3Cpath d='M29.1716 29.1716C30.7337 27.6095 33.2663 27.6095 34.8284 29.1716L98.8284 93.1716C100.391 94.7337 100.391 97.2663 98.8284 98.8284C97.2663 100.391 94.7337 100.391 93.1716 98.8284L29.1716 34.8284C27.6095 33.2663 27.6095 30.7337 29.1716 29.1716Z' stroke-width='3px' stroke='%233553D4' /%3E%3C/svg%3E");
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 16px 16px;
			content: ' ';
			cursor: pointer;
			display: table-cell;
			font-size: 12px;
			height: 16px;
			line-height: 1;
			padding: 2px;
			text-align: center;
			vertical-align: middle;
			width: 16px;
		}

		&:hover::after {
			background-color: ${lightBackgroundHover};
			color: ${lightColor};
		}

		&--disabled {
			cursor: default;

			&::after {
				cursor: default;
				background-color: ${colorMuted};
			}
		}
	}

	.react-datepicker__today-button {
		background: ${backgroundColor};
		border-top: 1px solid ${borderColor};
		cursor: pointer;
		text-align: center;
		padding: 5px 0;
		clear: left;
	}

	.react-datepicker__portal {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: ${modalOverlayColor};
		left: 0;
		top: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		z-index: 2147483647;

		.react-datepicker__day-name,
		.react-datepicker__day,
		.react-datepicker__time-name {
			width: 3rem;
			line-height: 3rem;
		}

		@media (max-width: 400px), (max-height: 550px) {
			.react-datepicker__day-name,
			.react-datepicker__day,
			.react-datepicker__time-name {
				width: 2rem;
				line-height: 2rem;
			}
		}

		.react-datepicker__current-month,
		.react-datepicker-time__header {
			font-size: 1.44rem;
		}
	}

	.react-datepicker__children-container {
		width: 13.8rem;
		margin: 0.4rem;
		padding-right: 0.2rem;
		padding-left: 0.2rem;
		height: auto;
	}

	.react-datepicker__aria-live {
		position: absolute;
		clip-path: circle(0);
		border: 0;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		width: 1px;
		white-space: nowrap;
	}

	.react-datepicker__calendar-icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}

	/** Overrides */
	.react-datepicker__year-text,
	.react-datepicker__month-text,
	.react-datepicker__quarter-text {
		padding: 0.75rem 0.5rem;
	}

	.react-datepicker__portal .react-datepicker {
		.react-datepicker__year-read-view,
		.react-datepicker__month-read-view,
		.react-datepicker__month-year-read-view {
			font-size: ${theme.fontSize.h6};
		}

		.react-datepicker__year-option,
		.react-datepicker__month-option,
		.react-datepicker__month-year-option {
			font: ${theme.fontSize.h6};
			line-height: 1.5;
		}
	}
`;

export const leftBorder = css`
	border-left: ${formTheme.borderWidth} solid ${formTheme.borderColor};

	&:focus-within {
		border-left: ${formTheme.borderWidthFocused} solid ${formTheme.borderColorFocused};
	}

	&.error {
		border-left: ${formTheme.borderWidth} solid ${formTheme.borderColorError};

		&:focus-within {
			border-left: ${formTheme.borderWidthFocused} solid ${formTheme.borderColorError};
		}
	}

	&.disabled {
		background-color: ${theme.color.black05};
		color: ${theme.color.black60};
	}
`;
