const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// location of where to generate the distribution bundle
const distDir = path.resolve('./dist');
// location where our tests are
const sourceTestDir = path.resolve('./src/test');
// location where our source (non test) are
const sourceDir = path.resolve('./src/web');
// location of our node_modules
const nodeModulesDir = path.join(__dirname, 'node_modules');

module.exports = {
	// we're running this from node, not a browser
	target: 'node',
	// pull in all our test source files into the bundle
	entry: fs.readdirSync(sourceTestDir).filter(n => /\.js$/.test(n)).map(n => path.join(sourceTestDir, n)),
	output: {
		// location of the output directory
		path: distDir,
		// the resulting built file will be in dist/bundle.js
		filename: 'bundle.js',
		// we want webpack to give us a module.exports
		libraryTarget: 'commonjs2'
	},
	resolve: {
		// only compile js and vue file extensions
		extensions: ['', '.js', '.vue'],
		fallback: [nodeModulesDir],
		alias: {
			// base vue doesn't ship with compiler so we need to alias it here from node_modules package
			'vue$': 'vue/dist/vue.common.js',
			// allows you to specify a relative require to source without absolute directory
			'src': sourceDir,
			'Vue': 'vue',
			'should': 'should'
		}
	},
	resolveLoader: {
		fallback: [nodeModulesDir]
	},
	module: {
		loaders: [
			{
				// this loader will compile vue files
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				// this loader will compile JS files from ES6/7 to ES5
				test: /\.js$/,
				loader: 'babel-loader',
				include: [sourceDir, sourceTestDir],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			// alias these global variables to their appropriate modules in node
			// so that they don't have to be explicitly required in your code
			Vue: 'Vue',
			should: 'should',
			$: 'jquery',
			jQuery: 'jquery'
		})
    ]
};
