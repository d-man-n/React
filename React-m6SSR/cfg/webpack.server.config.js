const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    target: "node",
    mode: 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            { 
                test: /\.[jt]sx?$/, 
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            onlyLocals: true,
                        }
                    },
                ],
            },
        ]
    },
    optimization: {
        minimize: false,
    }
};