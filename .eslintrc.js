module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential'
	],
	'overrides': [
		{
		  "files": [
			"**/__tests__/*.{j,t}s?(x)",
			"**/tests/unit/**/*.spec.{j,t}s?(x)"
		  ],
		  "env": {
			"jest": true
		  }
		}
	  ],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
