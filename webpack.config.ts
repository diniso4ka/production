import webpack from 'webpack'
import path from 'path';

import { BuildPaths, BuildEnv } from './config/build/types/config';
import { buildWebpackConfiguration } from './config/build/buildWebpackConfig'




export default (env: BuildEnv) => {
   const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
   }


   const mode = env.mode || 'development'
   const isDev = mode === 'development'
   const PORT = env.port || 3000


   const config: webpack.Configuration = buildWebpackConfiguration({
      mode: mode,
      paths,
      isDev,
      port: PORT,
   })

   return config
}