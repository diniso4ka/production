import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './Loaders/buildCssLoader';
import { buildBabelLoader } from './Loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(options.isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = buildBabelLoader(options);
    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader,
    ];
}
