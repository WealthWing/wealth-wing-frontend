const rules = {
	// Ensure that all vars are used (including args)
	'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
	'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],

	// As of React 17, React import is no longer needed
	'react/jsx-uses-react': 'off',
	'react/react-in-jsx-scope': 'off',

	// AIRBNB config overrides
	// 'import/order': would need somesort of auto-sorting tool to use this
	'import/order': 'off',

	// disallows const = () => for functional components
	'react/function-component-definition': 'off',

	// Disallows export const when on export is in file
	'import/prefer-default-export': 'off',

	// Consider enforcing for custom components (would need to refactor base components tho)
	'react/jsx-props-no-spreading': 'off',

	// Ick, this rule is handled particularly poorly - it doesn't allow dynamic assignment type={type} where type is "submit" | "button" | "reset"
	'react/button-has-type': 'off',

	// We aren't using propTypes in TSX (we'd use types instead)
	'react/prop-types': 'off',
	'react/require-default-props': 'off',
	'react/no-unknown-property': ['error', { ignore: ['css'] }],

	'import/no-extraneous-dependencies': 'off',

	// Disallow relative imports
	'simple-import-sort/imports': 'error',
	'no-console': ['error', { allow: ['warn', 'error'] }]
};

module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},

	globals: {
		Intl: true
	},

	overrides: [
		{
			files: ['**/*.{ts,tsx}'],
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
				'simple-import-sort',
				'prettier',
				'no-relative-import-paths'
			],
			extends: [
				// Basic react rules
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:jsx-a11y/recommended',
				'plugin:import/recommended',
				'plugin:react-hooks/recommended',

				// AIRBNB config is the most popular eslint config for React
				// Trying these rules out, but may switch in future (if it's far too strict)
				// GOAL: New files will be written with stricter coding standards
				'airbnb',
				'airbnb-typescript',

				// Typescript rules
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',

				// Prettier must come last to avoid conflicting rules
				'plugin:prettier/recommended'
			],
			rules: rules,
			settings: {
				react: {
					version: 'detect'
				}
			}
		}
	]
};
