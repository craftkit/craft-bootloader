
import { ResourceLoader } from './ResourceLoader.js';

/** 
 * JavaScript loader.
 * 
 * JavaScript loader implementation loads script content (=this.content) synchronously,
 * to guarantee first defined lib first loaded.
 * 
 * @namespace CraftBootloader.JavaScriptLoader
 * @packagename CraftBootloader.JavaScriptLoader
 * 
 */
export class JavaScriptLoader extends ResourceLoader {
	load(){
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = this.lib.content;
		script.async = false;
		document.head.appendChild(script);
	}
}
