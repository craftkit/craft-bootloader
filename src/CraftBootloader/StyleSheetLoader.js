
import { ResourceLoader } from './ResourceLoader.js';

/** 
 * StyleSheet loader.
 * 
 * Append the loaded resource to the head element.
 * 
 * @namespace CraftBootloader.StyleSheetLoader
 * @packagename CraftBootloader.StyleSheetLoader
 * 
 */
export class StyleSheetLoader extends ResourceLoader {
	load(){
		let head = document.head || document.getElementsByTagName('head')[0];
		let style = document.createElement('style');
		style.type = 'text/css';
		if( style.styleSheet ){
			style.styleSheet.cssText = this.lib.content;
		} else {
			style.appendChild(document.createTextNode(this.lib.content));
		}
		head.appendChild(style);
	}
}
