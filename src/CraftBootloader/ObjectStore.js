
/** 
 * ObjectStore wrapper.
 * 
 * @namespace CraftBootloader.ObjectStore
 * @packagename CraftBootloader.ObjectStore
 * 
 */
export class ObjectStore {
	
	/**
	 * Constructor
	 *
	 * @param {String} name - ObjectStore name
	 */
	constructor(database,name){
		this.db = database;
		this.name = name;
	}
	
	/**
	 * Put key:value pair into this ObjectStore
	 *
	 * @param {String} key - key
	 * @param {String} val - value
	 * @param {Function} callback - callback
	 */
	put(key,val,callback){
		this.db.connect((db)=>{
			let req = db.transaction(this.name,'readwrite').objectStore(this.name).put(val,key);
			req.onsuccess = ()=>{
				if( callback ){ callback(); }
			};
		});
	}
	
	/**
	 * Get the value for the key
	 *
	 * @param {String} key - key
	 * @param {Function} callback - callback
	 */
	get(key,callback){
		this.db.connect((db)=>{
			let req = db.transaction(this.name,'readonly').objectStore(this.name).get(key);
			req.onsuccess = (event) => {
				let val = req.result;
				if( callback ){ callback(val); }
			};
		});
	}
	
	/**
	 * Delete key:value pair from this ObjectStore
	 *
	 * @param {String} key - key
	 * @param {Function} callback - callback
	 */
	del(key,callback){
		this.db.connect((db)=>{
			let req = db.transaction(this.name,'readwrite').objectStore(this.name).delete(key);
			req.onsuccess = () => {
				if( callback ){ callback(); }
			};
		});
	}
	
	/**
	 * Get all keys in this ObjectStore
	 *
	 * @param {Function} callback - callback
	 */
	keys(callback){
		this.db.connect((db)=>{
			let req = db.transaction(this.name,'readonly').objectStore(this.name).getAllKeys();
			req.onsuccess = (event) => {
				let keys = req.result;
				if( callback ){ callback(keys); }
			};
		});
	}
}
