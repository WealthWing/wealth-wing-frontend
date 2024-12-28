module.exports = {
	extends: ['../../.eslintrc.js'],
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 2020
	},
	rules: {
		'no-restricted-imports': [
			'error',
			{
				patterns: [
					{
						group: ['@wealth-wing/..', '@wealth-wing/**/src'],
						message: 'import directly from `@wealth-wing/ui`.'
					}
				]
			}
		],
		'no-relative-import-paths/no-relative-import-paths': [
			'warn',
			{ rootDir: 'packages/lani/src' }
		]
	}
};
