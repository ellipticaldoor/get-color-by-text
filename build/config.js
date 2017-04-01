// http://vuejs-templates.github.io/webpack
var path = require('path')
var env = require('../env')

module.exports = {
	build: {
		env: env.web,
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false,
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		bundleAnalyzerReport: process.env.npm_config_report,
	},

	mobile: {
		env: env.mobile,
		index: path.resolve(__dirname, '../www/index.html'),
		assetsRoot: path.resolve(__dirname, '../www'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',
		productionSourceMap: false,
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		bundleAnalyzerReport: process.env.npm_config_report,
	},

	dev: {
		env: env.dev,
		port: env.dev.DEV_PORT,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		cssSourceMap: false,
	},
}
