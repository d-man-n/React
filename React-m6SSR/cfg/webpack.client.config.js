const path = require('path');

const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist/client'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    },
    module: {
        rules: [
            { 
                test: /\.[jt]sx?$/, 
                use: ['ts-loader'],
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
};
