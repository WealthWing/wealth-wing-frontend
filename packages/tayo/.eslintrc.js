module.exports = {
	extends: ['../../.eslintrc.js'],
	ignorePatterns: ['src/icon/generated/*.tsx'],
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 2020
	}
};
