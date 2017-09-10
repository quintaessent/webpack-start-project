const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

	entry: './client/main.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.sass?$/,
				use: ExtractTextPlugin.extract({
					fallback:'style-loader',
					use: [ 'css-loader', 'sass-loader'],
				})		
			},
			{
				test: /\.jpg$/,
				use: ['url-loader']
			},
			{
				test: /\.png$/,
				use: ['url-loader']
			},
			{
				test: /\.svg/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
		
		}),
		new ExtractTextPlugin('style.css')
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
	  }
}