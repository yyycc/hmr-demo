const path = require('path')
const webpack = require('webpack')
module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/')
	},
	devServer: {
		hot: true
	}
}