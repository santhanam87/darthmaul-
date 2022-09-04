const path = require('path');
const NodeExternals = require('webpack-node-externals');

module.exports = () => [
    {
        entry: { browser: './src/client/index.js' },
        mode: 'development',
        output: {
            filename: 'pageScript.js',
            path: path.resolve(__dirname, 'dist/public'),
        },
        module: {
            rules: [
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'swc-loader',
                    },
                },
            ],
        },
    },
    {
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
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
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
    },
];
