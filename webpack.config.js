const webpack = require('webpack');
const path = require('path');
const tslintOptions = require('./tslint.config.json');

module.exports = {
	entry: {
		'scripts': './src/App.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'tslint-loader',
				enforce: 'pre',
				options: {
					configFile: 'tslint.config.json'
				}
			}, 
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	}
}
