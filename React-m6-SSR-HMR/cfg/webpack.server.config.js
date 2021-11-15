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
            // { 
            //     test: /\.[jt]sx?$/, 
            //     loader: "ts-loader",
            // },
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                loader: 'babel-loader'
              },
            {
                test: /\.css$/,
                use: [
                    "style-loader", {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            }
                        }
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        minimize: false,
    }
};