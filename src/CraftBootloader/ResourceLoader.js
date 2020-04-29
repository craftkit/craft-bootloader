
/** 
 * Abstruct resource loader.
 * 
 * Super class for JavaScriptLoader and StyleSheetLoader.
 * 
 * @namespace CraftBootloader.ResourceLoader
 * @packagename CraftBootloader.ResourceLoader
 * 
 */
export class ResourceLoader {
	
	/**
	 * ResourceLoader constructor
	 *
	 * @param {Object} lib - `{ uri:<URI>, version:<STRING>, type:<STRING> }`
	 * @param {String} lib.uri - URI
	 * @param {String} lib.version - version
	 * @param {String} lib.type - [Reserved]
	 * @param {CraftBootloader.LibLoader} delegate - caller
	 */
	constructor(lib,delegate){
		this.lib = lib;
		this.delegate = delegate;
	}
	
	/**
	 * Prepare resource from IndexedDB
	 * @protected
	 */
	prepareFromCache(){
		window.bootConfig.Context.libStore.get(this.lib.uri,(content)=>{
			this.lib.content = content;
			this.delegate.checker(this.lib);
		});
	}
	
	/**
	 * Prepare resource from remote this.lib.uri
	 * @protected
	 */
	prepareFromRemote(){
		let http = new XMLHttpRequest();
		http.onload = (e) => { 
			this.lib.content = http.responseText;
			// version guarantees content
			window.bootConfig.Context.libStore.put(this.lib.uri,this.lib.content, () => {
				window.bootConfig.Context.verStore.put(this.lib.uri,this.lib.version, () => {
					this.delegate.checker(this.lib);
				});
			});
		};
		http.onerror = (e) => { alert('Cannot load'); };
		http.ontimeout = () => { alert('Timeout'); };
		http.open('GET',this.lib.uri);
		//http.withCredentials = true;
		http.send();
	}
	
	/**
	 * Prepare resource content
	 * @public
	 */
	prepare(){
		window.bootConfig.Context.verStore.get(this.lib.uri,(version)=>{
			if( this.lib.version !== version ){
				this.prepareFromRemote();
			}else{
				this.prepareFromCache();
			}
		});
	}
	
	/**
	 * Abstruct method.
	 * 
	 * Child must implement how to laod the resource into the DOM tree.
	 * 
	 * @protected
	 */
	load(){
		// you should implement your content loader
	}
}
