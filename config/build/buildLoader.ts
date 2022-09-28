import { BuildOptions } from './types/config';
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'



export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   }

   const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
         {
            loader: 'file-loader',
         },
      ],
   }


   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
               },
            }
         },
         'sass-loader',
      ]
   }


   const typeScriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }
   return [
      svgLoader,
      fileLoader,
      typeScriptLoader,
      cssLoader
   ]
}