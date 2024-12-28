export const normalize = `
	* {
		box-sizing: border-box;
	}

	button:not(:disabled),
	[type='button']:not(:disabled),
	[type='submit']:not(:disabled),
	select:not(:disabled) {
		cursor: pointer;
	}

	button:disabled,
	[type='button']:disabled,
	[type='submit']:disabled {
		cursor: not-allowed;
	}

	body {
		font-family: var(--ww-fontFamily-default);
		font-weight: var(--ww-fontWeight-body);
		line-height: var(--ww-lineHeight-body);
		font-size: var(--ww-fontSize-bodySM);
		color: var(--ww-color-gray900);
	}
`;

/* Based on:
   http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

export const reset = `
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* Additional Resets */
	button,
	[type='button'] {
		background: none;
		border: none;
		padding: 0;
	}

	a:link,
	a:hover,
	a:visited,
	a:active {
		text-decoration: none;
		color: inherit;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}

	legend {
		display: table;
		float: left;
		margin: 0;
		padding: 0;
		width: 100%;
	
		+ * {
			clear: both;
		}
	}
	
	fieldset {
		border: 0;
		padding: 0.01em 0 0 0;
		margin: 0;
		min-width: 0;
	}
`;
