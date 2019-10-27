
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-bootloader.min.dev.js',
		library: 'CraftBootloader',
		libraryTarget: 'window',
		globalObject: 'window'
	}
};
