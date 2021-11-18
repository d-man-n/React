const path = require('path');
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', ".css"]
    },
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {    
                test: /\.css$/,
                use: [ 
                    {
                    loader: 'css-loader',
                    options: { 
                            //включит настройки модуля лоадера
                            modules: {
                                //включит локальные селекторы
                                mode: 'local',
                                //как будет называться новый селектор
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            // ollyLocals: true,
                        }
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
        {
            test: GLOBAL_CSS_REGEXP,
            use: ['css-loader']
        }
    ]
    },
    optimization: {
        minimize: false,
    }
}