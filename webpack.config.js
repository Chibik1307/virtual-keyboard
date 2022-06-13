const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
	new HtmlWebpackPlugin({
		template: './index.html'
	})
];

module.exports = {
	entry: './index.js',
	mode: 'development',
	plugins,

	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true
	},

	devtool: 'source-map',

	devServer: {
		hot: true
	},

	module: {
		rules: [
			{ test: /\.(html)$/, use: [ 'html-loader' ] },
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	}
};
