const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
      clean: true,
    },
    module: {
      rules: [
        { test: /\.s[ac]ss$/i, use: [ "style-loader", "css-loader", "sass-loader" ] },
        { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
        { test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.ts$/, include: projectPaths(['src']), use: ['babel-loader', { loader: 'ts-loader' } ] },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue',],
    },
    plugins:[
          new HtmlWebpackPlugin({
            title: 'Scss application',
            template: 'src/index.html'
          }),
          new CssExtractPlugin({
            // Options similar to the same options in webpackOptions.output both options are optional
            filename: '[name].css',
          }),
    ]
};

function projectPaths(rootPaths) {
	const toAbsolute = rootRelative => resolve(__dirname, '../', rootRelative);
	return rootPaths.map(toAbsolute);
}