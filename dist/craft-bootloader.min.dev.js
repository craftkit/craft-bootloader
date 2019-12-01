window["CraftBootloader"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst CraftBootloader = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\ndocument.addEventListener('DOMContentLoaded',CraftBootloader.default.main);\n\nmodule.exports = CraftBootloader.default || CraftBootloader;\n\n\n//# sourceURL=webpack://CraftBootloader/./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_CraftBootloader_LibLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/CraftBootloader/LibLoader.js */ \"./src/CraftBootloader/LibLoader.js\");\n/* harmony import */ var _src_CraftBootloader_ResourceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/CraftBootloader/ResourceLoader.js */ \"./src/CraftBootloader/ResourceLoader.js\");\n/* harmony import */ var _src_CraftBootloader_JavaScriptLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/CraftBootloader/JavaScriptLoader.js */ \"./src/CraftBootloader/JavaScriptLoader.js\");\n/* harmony import */ var _src_CraftBootloader_StyleSheetLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/CraftBootloader/StyleSheetLoader.js */ \"./src/CraftBootloader/StyleSheetLoader.js\");\n/* harmony import */ var _src_CraftBootloader_Database_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/CraftBootloader/Database.js */ \"./src/CraftBootloader/Database.js\");\n/* harmony import */ var _src_CraftBootloader_ObjectStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/CraftBootloader/ObjectStore.js */ \"./src/CraftBootloader/ObjectStore.js\");\n\n\n\n\n\n\n\n\nconst CraftBootloader = {\n\tLibLoader        : _src_CraftBootloader_LibLoader_js__WEBPACK_IMPORTED_MODULE_0__[\"LibLoader\"],\n\tResourceLoader   : _src_CraftBootloader_ResourceLoader_js__WEBPACK_IMPORTED_MODULE_1__[\"ResourceLoader\"],\n\tJavaScriptLoader : _src_CraftBootloader_JavaScriptLoader_js__WEBPACK_IMPORTED_MODULE_2__[\"JavaScriptLoader\"],\n\tStyleSheetLoader : _src_CraftBootloader_StyleSheetLoader_js__WEBPACK_IMPORTED_MODULE_3__[\"StyleSheetLoader\"],\n\tDatabase         : _src_CraftBootloader_Database_js__WEBPACK_IMPORTED_MODULE_4__[\"Database\"],\n\tObjectStore      : _src_CraftBootloader_ObjectStore_js__WEBPACK_IMPORTED_MODULE_5__[\"ObjectStore\"],\n};\n\nCraftBootloader.usePackage = function(packages){\n\tpackages.inject(CraftBootloader);\n};\n\nCraftBootloader.main = function(){\n\twindow.onProgress = window.onProgress || window.onprogress;\n\twindow.onLibrayLoaded = window.onLibrayLoaded || window.onlibrayloaded;\n\t\n\tif( !window.bootConfig.database ){\n\t\twindow.bootConfig.database = {};\n\t}\n\twindow.bootConfig.database.indexeddb_name = window.bootConfig.database.indexeddb_name || 'CraftBootloader_database_indexeddb';\n\twindow.bootConfig.database.lib_store_name = window.bootConfig.database.lib_store_name || 'CraftBootloader_database_libStore';\n\twindow.bootConfig.database.ver_store_name = window.bootConfig.database.ver_store_name || 'CraftBootloader_database_verStore';\n\t\n\twindow.bootConfig.Context = {\n\t\tlibMap   : {}, // utility for checking already unused libraries\n\t\tdatabase : new CraftBootloader.Database(), // indexeddb wrapper\n\t\tlibStore : '', // objectStore for lib data\n\t\tverStore : '', // objectStore for lib version\n\t};\n\t\n\twindow.bootConfig.library.map((lib)=>{\n\t\twindow.bootConfig.Context.libMap[lib.uri] = 1;\n\t});\n\t\n\twindow.bootConfig.Context.database.connect(()=>{\n\t\tlet libLoader = new CraftBootloader.LibLoader();\n\t\tlibLoader.load();\n\t});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraftBootloader);\n\n\n\n//# sourceURL=webpack://CraftBootloader/./main.js?");

/***/ }),

/***/ "./src/CraftBootloader/Database.js":
/*!*****************************************!*\
  !*** ./src/CraftBootloader/Database.js ***!
  \*****************************************/
/*! exports provided: Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Database\", function() { return Database; });\n/* harmony import */ var _ObjectStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectStore.js */ \"./src/CraftBootloader/ObjectStore.js\");\n\n\n\n/** \n * IndexedDB wrapper.\n * \n * @namespace CraftBootloader.Database\n * @packagename CraftBootloader.Database\n * \n */\nclass Database {\n\t\n\t/**\n\t * Constructor\n\t *\n\t * @param {String} name - IndexedDB database name\n\t * @param {Integer} version - IndexedDB database version\n\t */\n\tconstructor(name,version){\n\t\tthis.name = name;\n\t\tthis.version = version || 1;\n\t\tthis.instance = '';\n\t}\n\t\n\t/**\n\t * Connect to the idb\n\t * \n\t * Connect to the IndexedDB.  \n\t * If not yet created, make it.\n\t * \n\t * @param {Function} callback - callback\n\t * \n\t * @public\n\t */\n\tconnect(callback){\n\t\tlet openRequest = indexedDB.open(this.name,this.version);\n\t\topenRequest.onupgradeneeded = (evnet) => {\n\t\t\tconsole.log('idb upgrade needed');\n\t\t\tthis.instance = openRequest.result;\n\t\t\t// init libStore/verStore\n\t\t\tthis.instance.createObjectStore(window.bootConfig.database.lib_store_name);\n\t\t\tthis.instance.createObjectStore(window.bootConfig.database.ver_store_name);\n\t\t};\n\t\topenRequest.onerror = () => {\n\t\t\tconsole.log('idb connection error');\n\t\t\tcallback();\n\t\t};\n\t\topenRequest.onsuccess = () => {\n\t\t\tif( !this.instance ){\n\t\t\t\tthis.instance = openRequest.result;\n\t\t\t}\n\t\t\tthis.setupStore();\n\t\t\tcallback(this.instance);\n\t\t};\n\t}\n\t\n\t/**\n\t * Stack ObjectStore (`libStore` and `verStore`) into the bootConfig.Context to be accessible from other module.\n\t * @protected\n\t */\n\tsetupStore(){\n\t\t// get wrapper object for libStore/verStore\n\t\twindow.bootConfig.Context.libStore = new _ObjectStore_js__WEBPACK_IMPORTED_MODULE_0__[\"ObjectStore\"](this,window.bootConfig.database.lib_store_name);\n\t\twindow.bootConfig.Context.verStore = new _ObjectStore_js__WEBPACK_IMPORTED_MODULE_0__[\"ObjectStore\"](this,window.bootConfig.database.ver_store_name);\n\t}\n\t\n\t/**\n\t * Disconnect from IndexedDB\n\t * @public\n\t */\n\tdisconnect(){\n\t\tthis.instance.close();\n\t}\n}\n\n\n//# sourceURL=webpack://CraftBootloader/./src/CraftBootloader/Database.js?");

/***/ }),

/***/ "./src/CraftBootloader/JavaScriptLoader.js":
/*!*************************************************!*\
  !*** ./src/CraftBootloader/JavaScriptLoader.js ***!
  \*************************************************/
/*! exports provided: JavaScriptLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JavaScriptLoader\", function() { return JavaScriptLoader; });\n/* harmony import */ var _ResourceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceLoader.js */ \"./src/CraftBootloader/ResourceLoader.js\");\n\n\n\n/** \n * JavaScript loader.\n * \n * JavaScript loader implementation loads script content (=this.content) synchronously,\n * to guarantee first defined lib first loaded.\n * \n * @namespace CraftBootloader.JavaScriptLoader\n * @packagename CraftBootloader.JavaScriptLoader\n * \n */\nclass JavaScriptLoader extends _ResourceLoader_js__WEBPACK_IMPORTED_MODULE_0__[\"ResourceLoader\"] {\n\tload(){\n\t\tlet script = document.createElement('script');\n\t\tscript.type = 'text/javascript';\n\t\tscript.text = this.lib.content;\n\t\tscript.async = false;\n\t\tdocument.head.appendChild(script);\n\t}\n}\n\n\n//# sourceURL=webpack://CraftBootloader/./src/CraftBootloader/JavaScriptLoader.js?");

/***/ }),

/***/ "./src/CraftBootloader/LibLoader.js":
/*!******************************************!*\
  !*** ./src/CraftBootloader/LibLoader.js ***!
  \******************************************/
/*! exports provided: LibLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LibLoader\", function() { return LibLoader; });\n/* harmony import */ var _JavaScriptLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JavaScriptLoader.js */ \"./src/CraftBootloader/JavaScriptLoader.js\");\n/* harmony import */ var _StyleSheetLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleSheetLoader.js */ \"./src/CraftBootloader/StyleSheetLoader.js\");\n\n\n\n\n/** \n * BootLoader entry point.\n * \n * Requires appropriate `window.bootConfig` definition.\n * \n * @namespace CraftBootloader.LibLoader\n * @packagename CraftBootloader.LibLoader\n * \n * @example\n * \n * let libLoader = new CraftBootloader.LibLoader();\n * libLoader.load();\n * \n */\nclass LibLoader {\n\t\n\t/**\n\t * LibLoader constructor\n\t *\n\t * @param {Array} libs - array of `{ uri:<URI>, version:<STRING>, type:<STRING> }`\n\t */\n\tconstructor(libs){\n\t\tthis.libs = window.bootConfig.library;\n\t\tthis.loadFlags = {};\n\t\tthis.libs.map((lib)=>{\n\t\t\tthis.loadFlags[lib.uri] = false;\n\t\t});\n\t}\n\t\n\t/**\n\t * Remove unused libraries from IndexedDB\n\t * \n\t * @param {Function} callback - callback\n\t * \n\t * @public\n\t */\n\tclearUnusedLibs(callback){\n\t\twindow.bootConfig.Context.verStore.keys((uris)=>{\n\t\t\turis.map((uri)=>{\n\t\t\t\tif( !window.bootConfig.Context.libMap[uri] ){\n\t\t\t\t\twindow.bootConfig.Context.verStore.del(uri);\n\t\t\t\t\twindow.bootConfig.Context.libStore.del(uri);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n\t\n\t/**\n\t * Loader entry point\n\t * @public\n\t */\n\tload(){\n\t\tif( this.libs.length < 1 ){\n\t\t\treturn window.bootConfig.onLibrayLoaded();\n\t\t}\n\t\t\n\t\tthis.libs.map((lib)=>{\n\t\t\tif( lib.uri.match(/\\.js$/) ){\n\t\t\t\tlib.loader = new _JavaScriptLoader_js__WEBPACK_IMPORTED_MODULE_0__[\"JavaScriptLoader\"](lib,this);;\n\t\t\t\tlib.loader.prepare();\n\t\t\t}else if( lib.uri.match(/\\.css$/) ){\n\t\t\t\tlib.loader = new _StyleSheetLoader_js__WEBPACK_IMPORTED_MODULE_1__[\"StyleSheetLoader\"](lib,this);;\n\t\t\t\tlib.loader.prepare();\n\t\t\t}\n\t\t});\n\t\t\n\t\tthis.clearUnusedLibs();\n\t}\n\t\n\t/**\n\t * Check if all libraries were loaded.\n\t * \n\t * @param {String} uri - a URI\n\t * \n\t * @protected\n\t */\n\tchecker(lib){\n\t\tthis.loadFlags[lib.uri] = true;\n\t\tlet complete = true;\n\t\t\n\t\tif( window.bootConfig.onProgress ){\n\t\t\twindow.bootConfig.onProgress(lib); // notify the lib was loaded\n\t\t}\n\t\t\n\t\tlet uris = Object.keys(this.loadFlags);\n\t\tfor( let i=0; i<uris.length; i++ ){\n\t\t\tif( !this.loadFlags[uris[i]] ){\n\t\t\t\tcomplete = false;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\t\n\t\tif( complete ){\n\t\t\t// ok, lets laod libs in the order of bootConfig.library definition\n\t\t\tthis.libs.map((lib)=>{\n\t\t\t\tlib.loader.load(); // it's synchronous\n\t\t\t});\n\t\t\twindow.bootConfig.onLibrayLoaded();\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://CraftBootloader/./src/CraftBootloader/LibLoader.js?");

/***/ }),

/***/ "./src/CraftBootloader/ObjectStore.js":
/*!********************************************!*\
  !*** ./src/CraftBootloader/ObjectStore.js ***!
  \********************************************/
/*! exports provided: ObjectStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectStore\", function() { return ObjectStore; });\n\n/** \n * ObjectStore wrapper.\n * \n * @namespace CraftBootloader.ObjectStore\n * @packagename CraftBootloader.ObjectStore\n * \n */\nclass ObjectStore {\n\t\n\t/**\n\t * Constructor\n\t *\n\t * @param {String} name - ObjectStore name\n\t */\n\tconstructor(database,name){\n\t\tthis.db = database;\n\t\tthis.name = name;\n\t}\n\t\n\t/**\n\t * Put key:value pair into this ObjectStore\n\t *\n\t * @param {String} key - key\n\t * @param {String} val - value\n\t * @param {Function} callback - callback\n\t */\n\tput(key,val,callback){\n\t\tthis.db.connect((db)=>{\n\t\t\tlet req = db.transaction(this.name,'readwrite').objectStore(this.name).put(val,key);\n\t\t\treq.onsuccess = ()=>{\n\t\t\t\tif( callback ){ callback(); }\n\t\t\t};\n\t\t});\n\t}\n\t\n\t/**\n\t * Get the value for the key\n\t *\n\t * @param {String} key - key\n\t * @param {Function} callback - callback\n\t */\n\tget(key,callback){\n\t\tthis.db.connect((db)=>{\n\t\t\tlet req = db.transaction(this.name,'readonly').objectStore(this.name).get(key);\n\t\t\treq.onsuccess = (event) => {\n\t\t\t\tlet val = req.result;\n\t\t\t\tif( callback ){ callback(val); }\n\t\t\t};\n\t\t});\n\t}\n\t\n\t/**\n\t * Delete key:value pair from this ObjectStore\n\t *\n\t * @param {String} key - key\n\t * @param {Function} callback - callback\n\t */\n\tdel(key,callback){\n\t\tthis.db.connect((db)=>{\n\t\t\tlet req = db.transaction(this.name,'readwrite').objectStore(this.name).delete(key);\n\t\t\treq.onsuccess = () => {\n\t\t\t\tif( callback ){ callback(); }\n\t\t\t};\n\t\t});\n\t}\n\t\n\t/**\n\t * Get all keys in this ObjectStore\n\t *\n\t * @param {Function} callback - callback\n\t */\n\tkeys(callback){\n\t\tthis.db.connect((db)=>{\n\t\t\tlet req = db.transaction(this.name,'readonly').objectStore(this.name).getAllKeys();\n\t\t\treq.onsuccess = (event) => {\n\t\t\t\tlet keys = req.result;\n\t\t\t\tif( callback ){ callback(keys); }\n\t\t\t};\n\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack://CraftBootloader/./src/CraftBootloader/ObjectStore.js?");

/***/ }),

/***/ "./src/CraftBootloader/ResourceLoader.js":
/*!***********************************************!*\
  !*** ./src/CraftBootloader/ResourceLoader.js ***!
  \***********************************************/
/*! exports provided: ResourceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceLoader\", function() { return ResourceLoader; });\n\n/** \n * Abstruct resource loader.\n * \n * Super class for JavaScriptLoader and StyleSheetLoader.\n * \n * @namespace CraftBootloader.ResourceLoader\n * @packagename CraftBootloader.ResourceLoader\n * \n */\nclass ResourceLoader {\n\t\n\t/**\n\t * ResourceLoader constructor\n\t *\n\t * @param {Object} lib - `{ uri:<URI>, version:<STRING>, type:<STRING> }`\n\t * @param {String} lib.uri - URI\n\t * @param {String} lib.version - version\n\t * @param {String} lib.type - [Reserved]\n\t * @param {CraftBootloader.LibLoader} delegate - caller\n\t */\n\tconstructor(lib,delegate){\n\t\tthis.lib = lib;\n\t\tthis.delegate = delegate;\n\t}\n\t\n\t/**\n\t * Prepare resource from IndexedDB\n\t * @protected\n\t */\n\tprepareFromCache(){\n\t\twindow.bootConfig.Context.libStore.get(this.lib.uri,(content)=>{\n\t\t\tthis.lib.content = content;\n\t\t\tthis.delegate.checker(this.lib);\n\t\t});\n\t}\n\t\n\t/**\n\t * Prepare resource from remote this.lib.uri\n\t * @protected\n\t */\n\tprepareFromRemote(){\n\t\tlet http = new XMLHttpRequest();\n\t\thttp.onload = (e) => { \n\t\t\tthis.lib.content = http.responseText;\n\t\t\t// version guarantees content\n\t\t\twindow.bootConfig.Context.libStore.put(this.lib.uri,this.lib.content, () => {\n\t\t\t\twindow.bootConfig.Context.verStore.put(this.lib.uri,this.lib.version, () => {\n\t\t\t\t\tthis.delegate.checker(this.lib);\n\t\t\t\t});\n\t\t\t});\n\t\t};\n\t\thttp.onerror = (e) => { alert('Cannot load'); };\n\t\thttp.ontimeout = () => { alert('Timeout'); };\n\t\thttp.open('GET',this.lib.uri);\n\t\t//http.withCredentials = true;\n\t\thttp.send();\n\t}\n\t\n\t/**\n\t * Prepare resource content\n\t * @public\n\t */\n\tprepare(){\n\t\twindow.bootConfig.Context.verStore.get(this.lib.uri,(version)=>{\n\t\t\tif( this.lib.version !== version ){\n\t\t\t\tthis.prepareFromRemote();\n\t\t\t}else{\n\t\t\t\tthis.prepareFromCache();\n\t\t\t}\n\t\t});\n\t}\n\t\n\t/**\n\t * Abstruct method.\n\t * \n\t * Child must implement how to laod the resource into the DOM.\n\t * \n\t * @protected\n\t */\n\tload(){\n\t\t// you should implement your content loader\n\t}\n}\n\n\n//# sourceURL=webpack://CraftBootloader/./src/CraftBootloader/ResourceLoader.js?");

/***/ }),

/***/ "./src/CraftBootloader/StyleSheetLoader.js":
/*!*************************************************!*\
  !*** ./src/CraftBootloader/StyleSheetLoader.js ***!
  \*************************************************/
/*! exports provided: StyleSheetLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyleSheetLoader\", function() { return StyleSheetLoader; });\n/* harmony import */ var _ResourceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceLoader.js */ \"./src/CraftBootloader/ResourceLoader.js\");\n\n\n\n/** \n * StyleSheet loader.\n * \n * Append the loaded resource to the head element.\n * \n * @namespace CraftBootloader.StyleSheetLoader\n * @packagename CraftBootloader.StyleSheetLoader\n * \n */\nclass StyleSheetLoader extends _ResourceLoader_js__WEBPACK_IMPORTED_MODULE_0__[\"ResourceLoader\"] {\n\tload(){\n\t\tlet head = document.head || document.getElementsByTagName('head')[0];\n\t\tlet style = document.createElement('style');\n\t\tstyle.type = 'text/css';\n\t\tif( style.styleSheet ){\n\t\t\tstyle.styleSheet.cssText = this.lib.content;\n\t\t} else {\n\t\t\tstyle.appendChild(document.createTextNode(this.lib.content));\n\t\t}\n\t\thead.appendChild(style);\n\t}\n}\n\n\n//# sourceURL=webpack://CraftBootloader/./src/CraftBootloader/StyleSheetLoader.js?");

/***/ })

/******/ });