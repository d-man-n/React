const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
    ],
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: "/static/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
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

    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ]
};
