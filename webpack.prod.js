// Task #4: Create a production configuration
import { merge } from 'webpack-merge';
import common from './webpack.config.js';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { resolve } from 'path';

export default merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(), 
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
});
