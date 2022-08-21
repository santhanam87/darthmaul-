const path = require('path');
const NodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/index',
	mode: 'development',
	target: 'node',
	externals: [NodeExternals()],
	cache: false,
	devtool: 'source-map',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'dist'),
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	resolve: {
		extensions: ['.wasm', '.mjs', '.js', '.json', '.dust'],
		modules: ['node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				resolve: {
					fullySpecified: false,
				},
				use: [
					{
						loader: 'swc-loader',
					},
				],
			},
		],
	},
};
