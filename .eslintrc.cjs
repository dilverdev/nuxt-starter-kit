module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	plugins: [],
	rules: {
		// JS
		curly: 'off',
		camelcase: 'off',
		'arrow-parens': 'off',
		'comma-dangle': ['error', 'always-multiline'],
		// Vue
		'vue/no-v-html': 'off',
		'vue/no-reserved-component-names': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/script-setup-no-uses-vars': 'off',
		'vue/no-multiple-template-root': 'off',
		'prettier/prettier': [2, { useTabs: true }],
	},
}
