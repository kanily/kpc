const webpack = require('webpack'); const path = require('path');
const webpackConfig = require('../webpack.config.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageJson = require('../package.json');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
process.URL_PREFIX = isDev ? '' : '//damife.ks3-cn-beijing.ksyun.com/kpc';
// process.URL_PREFIX = '';

module.exports = function(theme) {
    // add theme
    const commonConfig = merge.smartStrategy()(webpackConfig);
    if (theme && theme !== 'default' && theme !== '__nouse') {
        commonConfig.module.rules[2].use[2].options.import =
            path.resolve(__dirname, `../styles/themes/${theme}/index.styl`);
    }

    const config = merge.smartStrategy({
        'module.rules.use': 'replace'
    })(webpackConfig, {
        output: {
            path: isDev ? path.resolve(__dirname, './.dist') : path.resolve(__dirname, './dist'),
            publicPath: isDev ? '/' : `${process.URL_PREFIX}/`,
            chunkFilename: 'static/chunk/[chunkhash].js',
        },
        module: {
            rules: [
                {
                    test: /\.(woff2?|eot|ttf|otf|svg|jpg|png)(\?.*)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: './fonts/',
                                publicPath: isDev ? '/fonts/' : `${process.URL_PREFIX}/fonts/`,
                                name: '[name].[ext]',
                            }
                        }
                    ]
                },
                {
                    test: /\.styl$/,
                    use: !process.env.THEME && theme !== '__nouse' ?
                        ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                            // the third rule is a stylus rule
                            use: commonConfig.module.rules[2].use,
                        })) :
                        ['style-loader'].concat(commonConfig.module.rules[2].use),
                },
                {
                    test: /\.css$/,
                    use: !process.env.THEME && theme !== '__nouse' ?
                        ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                            use: commonConfig.module.rules[3].use,
                        })) :
                        ['style-loader'].concat(commonConfig.module.rules[3].use),
                },
            ]
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, isDev ? './.dist' : './dist'),
                '@': path.resolve(__dirname, './src'),
            }
        },
        devtool: isDev ? '#inline-source-map' : 'none',
    });

    config.plugins = [
        new webpack.ProvidePlugin({
            Intact: 'intact'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.version': JSON.stringify(packageJson.version),
        }),
        new MonacoWebpackPlugin(),
    ];

    if (!process.env.THEME && theme !== '__nouse') {
        config.plugins.push(
            new ExtractTextPlugin({
                filename: theme ? `theme-${theme}.css` : 'theme-kpc.css',
                allChunks: true,
            })
        );
    }

    return config;
}
