
import { JavaScriptLoader } from './JavaScriptLoader.js';
import { StyleSheetLoader } from './StyleSheetLoader.js';

/** 
 * BootLoader entry point.
 * 
 * Requires appropriate `window.bootConfig` definition.
 * 
 * @namespace CraftBootloader.LibLoader
 * @packagename CraftBootloader.LibLoader
 * 
 * @example
 * 
 * let libLoader = new CraftBootloader.LibLoader();
 * libLoader.load();
 * 
 */
export class LibLoader {
	
	/**
	 * LibLoader constructor
	 *
	 * @param {Array} libs - array of `{ uri:<URI>, version:<STRING>, type:<STRING> }`
	 */
	constructor(libs){
		this.libs = window.bootConfig.library;
		this.loadFlags = {};
		this.libs.map((lib)=>{
			this.loadFlags[lib.uri] = false;
		});
	}
	
	/**
	 * Remove unused libraries from IndexedDB
	 * 
	 * @param {Function} callback - callback
	 * 
	 * @public
	 */
	clearUnusedLibs(callback){
		window.bootConfig.Context.verStore.keys((uris)=>{
			uris.map((uri)=>{
				if( !window.bootConfig.Context.libMap[uri] ){
					window.bootConfig.Context.verStore.del(uri);
					window.bootConfig.Context.libStore.del(uri);
				}
			});
		});
	}
	
	/**
	 * Loader entry point
	 * @public
	 */
	load(){
		if( this.libs.length < 1 ){
			return window.bootConfig.onLibrayLoaded();
		}
		
		this.libs.map((lib)=>{
			if( lib.uri.match(/\.js$/) ){
				lib.loader = new JavaScriptLoader(lib,this);;
				lib.loader.prepare();
			}else if( url.url.match(/\.css$/) ){
				lib.loader = new StyleSheetLoader(lib,this);;
				lib.loader.prepare();
			}
		});
		
		this.clearUnusedLibs();
	}
	
	/**
	 * Check if all libraries were loaded.
	 * 
	 * @param {String} uri - a URI
	 * 
	 * @protected
	 */
	checker(lib){
		this.loadFlags[lib.uri] = true;
		let complete = true;
		
		if( window.bootConfig.onProgress ){
			window.bootConfig.onProgress(lib); // notify the lib was loaded
		}
		
		let uris = Object.keys(this.loadFlags);
		for( let i=0; i<uris.length; i++ ){
			if( !this.loadFlags[uris[i]] ){
				complete = false;
				break;
			}
		}
		
		if( complete ){
			// ok, lets laod libs in the order of bootConfig.library definition
			this.libs.map((lib)=>{
				lib.loader.load(); // it's synchronous
			});
			window.bootConfig.onLibrayLoaded();
		}
	}
}
