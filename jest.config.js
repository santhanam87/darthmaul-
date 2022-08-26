const config = {
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!*.config.js',
	],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': ['@swc/jest'],
	},
};

module.exports = config;
