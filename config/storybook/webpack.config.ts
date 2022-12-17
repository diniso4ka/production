import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/Loaders/buildCssLoader';

export default ({ config }: {config:webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ));
    if (config) {
        config!.resolve!.modules = [paths.src, 'node_modules'];
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.module!.rules.push(buildCssLoader(true));

        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config!.plugins!.push(new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }));
    }

    return config;
};
