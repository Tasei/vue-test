let path = require('path')
let config = require('../config')
let utils = require('./utils')
let projectRoot = path.resolve(__dirname, '../')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let webpack = require('webpack')
let CopyWebpackPlugin = require('copy-webpack-plugin')

const _root = path.resolve(process.cwd())

let env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
let cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
let cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
let useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    entry: {
        // www: ['babel-polyfill','./src/entry/www.js'],
        mobile: ['babel-polyfill', './src/entry/mobile.js'],
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js',
        chunkFilename: "[id].js",
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'vendor': path.resolve(__dirname, '../src/vendor'),
            'utils': path.resolve(__dirname, '../src/utils'),
            'mixins': path.resolve(__dirname, '../src/mixins'),
            'bus': path.resolve(__dirname, '../src/bus'),

            'iLoading': path.resolve(__dirname, '../components/loading'),
            'iRadio': path.resolve(__dirname, '../components/radio'),
            'iStep': path.resolve(__dirname, '../components/step'),
            'iMessage': path.resolve(__dirname, '../components/message'),
            'iDotSteps': path.resolve(__dirname, '../components/dotSteps'),
            'iButton': path.resolve(__dirname, '../components/button'),
            'snowshoe': path.resolve(__dirname, '../src/assets/js/snowshoe')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    plugins: [
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:7].css')),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new CopyWebpackPlugin([{
            from: path.resolve(_root, 'src/page/m/sorry.html'),
            to: 'm/',
        }]),

        new CopyWebpackPlugin([{
            from: path.resolve(_root, 'src/page/m/pay.htm'),
            to: 'm/',
        }]),

        new CopyWebpackPlugin([{
            from: path.resolve(_root, 'src/page/m/alipay_success.htm'),
            to: 'm/',
        }]),

        new CopyWebpackPlugin([{
            from: path.resolve(_root, 'src/assets/images/favicon.png'),
            to: 'm/',
        }]),

        new CopyWebpackPlugin([{
            from: path.resolve(_root, 'src/page/m/yumLive.html'),
            to: 'm/',
        }]),

        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    vue: {
        loaders: utils.cssLoaders({sourceMap: useCssSourceMap}),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    }
}
