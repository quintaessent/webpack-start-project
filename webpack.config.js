const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: './client/main.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),

	},
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
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
				use: ['style-loader', 'css-loader', 'sass-loader']		
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
		new ExtractTextPlugin('style.css'),
		
	],
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
	  }
}
