const path = require('path');
const NodeExternals = require('webpack-node-externals');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientEntryPoints = glob.sync('./src/client/pages/**.js').reduce((obj, el) => {
    // eslint-disable-next-line no-param-reassign
    obj[path.parse(el).name] = el;
    return obj;
}, {});

module.exports = () => [
    {
        entry: clientEntryPoints,
        mode: 'development',
        plugins: [new MiniCssExtractPlugin()],
        output: {
            filename: '[name].js',
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
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Extract it to seperate file
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
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
                { test: /\.(scss|css)$/, loader: 'ignore-loader' },
            ],
        },
    },
];
