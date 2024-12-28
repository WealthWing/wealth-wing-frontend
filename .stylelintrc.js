module.exports = {
	extends: ['stylelint-config-standard'],
	customSyntax: 'postcss-styled-syntax',
	plugins: ['stylelint-order'],
	rules: {
		'custom-property-pattern': null,
		'declaration-block-no-redundant-longhand-properties': null,
		'function-name-case': null,
		'media-feature-range-notation': 'prefix',
		'order/properties-alphabetical-order': true,
		'selector-class-pattern': null,
		'value-keyword-case': null
	}
};
