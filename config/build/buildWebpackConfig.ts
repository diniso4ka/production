import path from 'path'
import webpack from 'webpack'


import { BuildOptions } from './types/config'


import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoader'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'


export function buildWebpackConfiguration(options: BuildOptions) {

   const { paths, mode, isDev } = options

   return {
      mode,
      entry: paths.entry,
      output: {
         filename: '[name].js',
         path: paths.build,
         clean: true
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolvers(options),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined
   }
}