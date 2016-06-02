var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index.js' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel']
		}, {
			test: /\.less$/,
			loader: 'style!css!postcss!less'
		}, {
			test: /\.css/,
			loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	},
	postcss: [autoprefixer],
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("style.less"),
		//new webpack.optimize.UglifyJsPlugin({
		//	compressor: {
		//		warnings: false
		//	}
		//}),
		new webpack.NoErrorsPlugin()

	]
};