var path = require('path');
var webpack = require('webpack');

module.exports = {
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
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};