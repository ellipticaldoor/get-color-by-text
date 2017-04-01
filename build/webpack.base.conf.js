var path = require('path')
var utils = require('./utils')
var config = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

var final_path = config.build.assetsRoot
var final_publicPath = process.env.NODE_ENV === 'production'
	? config.build.assetsPublicPath
	: config.dev.assetsPublicPath
var file_size_limit = 10000


if (process.env.APP_TYPE === 'mobile') {
	final_path = config.mobile.assetsRoot
	final_publicPath = config.mobile.assetsPublicPath
	file_size_limit = 1000000000000
}


module.exports = {
	entry: {
		app: './src/main.js',
	},
	output: {
		path: final_path,
		filename: '[name].js',
		publicPath: final_publicPath,
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'~': resolve('src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter'),
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')],
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: file_size_limit,
					name: utils.assetsPath('img/[name].[hash:7].[ext]'),
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: file_size_limit,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
				},
			},
		],
	},
}
