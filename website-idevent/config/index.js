// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '//static.idevent.cn/m/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        port: 8285,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            "/api": {
                // target: 'http://10.1.1.58:8003',
                // host: '10.1.1.58',
                target: 'http://test-m.idevent.cn',
                host: 'test-m.idevent.cn',
                /*target: 'http://106.14.47.17:8103',
                host: '106.14.47.17',*/
                logLevel: 'debug',
                changeOrigin: true
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}
