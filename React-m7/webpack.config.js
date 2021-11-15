const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const path = require('path');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            { 
                test: /\.[jt]sx?$/, 
                loader: "ts-loader",
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
    plugins: [ new DefinePlugin({'process.env.CLIENT_ID' : `'${process.env.CLIENT_ID}'`})],
};
