
var path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-bootloader.min.js',
		library: 'CraftBootloader',
		libraryTarget: 'window',
		globalObject: 'window'
	}
};
