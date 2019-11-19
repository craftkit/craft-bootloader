
import { LibLoader } from './src/CraftBootloader/LibLoader.js';
import { ResourceLoader } from './src/CraftBootloader/ResourceLoader.js';
import { JavaScriptLoader } from './src/CraftBootloader/JavaScriptLoader.js';
import { StyleSheetLoader } from './src/CraftBootloader/StyleSheetLoader.js';
import { Database } from './src/CraftBootloader/Database.js';
import { ObjectStore } from './src/CraftBootloader/ObjectStore.js';

const CraftBootloader = {
	LibLoader        : LibLoader,
	ResourceLoader   : ResourceLoader,
	JavaScriptLoader : JavaScriptLoader,
	StyleSheetLoader : StyleSheetLoader,
	Database         : Database,
	ObjectStore      : ObjectStore,
};

CraftBootloader.usePackage = function(packages){
	packages.inject(CraftBootloader);
};

CraftBootloader.main = function(){
	window.onProgress = window.onProgress || window.onprogress;
	window.onLibrayLoaded = window.onLibrayLoaded || window.onlibrayloaded;
	
	if( !window.bootConfig.database ){
		window.bootConfig.database = {};
	}
	window.bootConfig.database.indexeddb_name = window.bootConfig.database.indexeddb_name || 'CraftBootloader_database_indexeddb';
	window.bootConfig.database.lib_store_name = window.bootConfig.database.lib_store_name || 'CraftBootloader_database_libStore';
	window.bootConfig.database.ver_store_name = window.bootConfig.database.ver_store_name || 'CraftBootloader_database_verStore';
	
	window.bootConfig.Context = {
		libMap   : {}, // utility for checking already unused libraries
		database : new CraftBootloader.Database(), // indexeddb wrapper
		libStore : '', // objectStore for lib data
		verStore : '', // objectStore for lib version
	};
	
	window.bootConfig.library.map((lib)=>{
		window.bootConfig.Context.libMap[lib.uri] = 1;
	});
	
	window.bootConfig.Context.database.connect(()=>{
		let libLoader = new CraftBootloader.LibLoader();
		libLoader.load();
	});
};

export default CraftBootloader;

