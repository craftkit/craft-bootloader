
import { ObjectStore } from './ObjectStore.js';

/** 
 * IndexedDB wrapper.
 * 
 * @namespace CraftBootloader.Database
 * @packagename CraftBootloader.Database
 * 
 */
export class Database {
	
	/**
	 * Constructor
	 *
	 * @param {String} name - IndexedDB database name
	 * @param {Integer} version - IndexedDB database version
	 */
	constructor(name,version){
		this.name = name;
		this.version = version || 1;
		this.instance = '';
	}
	
	/**
	 * Connect to the idb
	 * 
	 * Connect to the IndexedDB.  
	 * If not yet created, make it.
	 * 
	 * @param {Function} callback - callback
	 * 
	 * @public
	 */
	connect(callback){
		let openRequest = indexedDB.open(this.name,this.version);
		openRequest.onupgradeneeded = (evnet) => {
			console.log('idb upgrade needed');
			this.instance = openRequest.result;
			// init libStore/verStore
			this.instance.createObjectStore(window.bootConfig.database.lib_store_name);
			this.instance.createObjectStore(window.bootConfig.database.ver_store_name);
		};
		openRequest.onerror = () => {
			console.log('idb connection error');
			callback();
		};
		openRequest.onsuccess = () => {
			if( !this.instance ){
				this.instance = openRequest.result;
			}
			this.setupStore();
			callback(this.instance);
		};
	}
	
	/**
	 * Stack ObjectStore (`libStore` and `verStore`) into the bootConfig.Context to be accessible from other module.
	 * @protected
	 */
	setupStore(){
		// get wrapper object for libStore/verStore
		window.bootConfig.Context.libStore = new ObjectStore(this,window.bootConfig.database.lib_store_name);
		window.bootConfig.Context.verStore = new ObjectStore(this,window.bootConfig.database.ver_store_name);
	}
	
	/**
	 * Disconnect from IndexedDB
	 * @public
	 */
	disconnect(){
		this.instance.close();
	}
}
