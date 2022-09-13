const path = require('path');
const NodeExternals = require('webpack-node-externals');
const glob = require('glob');

const clientEntryPoints = glob.sync('./src/client/pages/**.js').reduce((obj, el) => {
    // eslint-disable-next-line no-param-reassign
    obj[path.parse(el).name] = el;
    return obj;
}, {});

module.exports = () => [
    {
        entry: clientEntryPoints,
        mode: 'development',
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
            ],
        },
    },
];
