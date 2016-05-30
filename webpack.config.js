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
			loaders: ['babel']
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.optimize.UglifyJsPlugin({
		//	compressor: {
		//		warnings: false
		//	}
		//}),
		new webpack.NoErrorsPlugin()

	]
};