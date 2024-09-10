import { resolve, join } from 'path';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                _loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.html$/,
            use: 'html-loader'
        }
    ]
};
export const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })
];
export const devtool = 'source-map';
export const devServer = {
    static: {
        directory: join(__dirname, 'dist'),
    },
    compress: true,
    port: 5000,
    hot: true,
};
export const mode = 'development';
export const optimization = {
    splitChunks: {
        chunks: 'all',
    },
    minimize: true,
};
