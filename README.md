
# CraftBootloader

Ultra fast web application loader by caching all libraries in IndexedDB.


## Usage

1. Load CraftBootloader (`craft-bootloader.min.js`)
2. Define `window.bootConfig`

When `DOMContentLoaded` is fired, `onLibraryLoaded` is executed.

``` 
<html>
<head>
	<script src="https://unpkg.com/@craftkit/craft-bootloader/dist/craft-bootloader.min.js"></script>
	<script>
		window.bootConfig = {
			library : [
				// array of libraries you would like to cache in IndexedDB.
				{ uri:'a URI', version:'current version' }
			],
			onProgress : function(lib){
				// a library has been loaded
			},
			onLibrayLoaded : function(){
				// all libraries have been loaded
			}
		};
	</script>
</head>
<body></body>
</html>
``` 

## bootConfig spec

| Property        | Description     |
|:----------------|:----------------|
| library         | Array of library element (see below) |
| onLibraryLoaded | Function called when all `library` elements have been loaded. |
| onProgress      | Function called when a `library` element has been loaded. |


### library spec

| Property        | Description     |
|:----------------|:----------------|
| uri             | resource location |
| version         | version string.<br>If update, the resource will be reloaded.<br>You can use any string for `version`. But you may use somthing like: `1.1.1`. |
| _metadata_      | You can defined any other metadata in your library element.<br>This is useful when you manage loading progress by using `onProgress` |


* Cached library element will never be updated until you change the version.
* If you remove some libraries from bootConfig, those will be also removed from IndexedDB.


#### metadata example

Below sample uses metadata to indicate how much is loaded.

``` 
var loaded_percentage = 0;

window.bootConfig = {
	library : [
		{ uri:'https://example.com/lib1.js', version:'1.0.0', size:30 },
		{ uri:'https://example.com/lib2.js', version:'1.0.0', size:40 },
		{ uri:'https://example.com/lib3.js', version:'1.0.0', size:20 },
		{ uri:'https://example.com/css1.css', version:'1.0.0', size:10 }
	],
	onProgress : function(lib){
		loaded_percentage += lib.size;
		console.log(`${loaded_percentage}% loaded`);
	},
``` 


## Runnable example

CraftBootloader enhanced version of [Craft-Widget-Calendar sample](https://github.com/craftkit/craft-widget-calendar#sample).

``` 
<html>
<head>
	<title>Bootloader example</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
	<style>html,body { width: 100%; height: 100%; box-sizing:border-box; margin:0; padding:0; }</style>
	
	<script src="https://unpkg.com/@craftkit/craft-bootloader/dist/craft-bootloader.min.dev.js"></script>
	<script>
		window.bootConfig = {
			library : [
				{ uri:'https://unpkg.com/@craftkit/craft-uikit/dist/craft-uikit.min.js', version:'1.0.0' },
				{ uri:'https://unpkg.com/@craftkit/craft-widget-calendar/dist/craft-widget-calendar.min.js', version:'1.0.0' },
				{ uri:'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js', version:'1.0.0' }
			],
			onProgress : function(lib){
				console.log(lib.uri+' was loaded');
			},
			onLibrayLoaded : function(){
				// prepare demo data
				var meta = {};
				var this_month = moment();
				var prev_month = this_month.clone().subtract(1,'month');
				var next_month = this_month.clone().add(1,'month');
				meta[ prev_month.date(10).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 11:00' };
				meta[ this_month.date(15).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 9:00' };
				meta[ this_month.date(24).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 15:00' };
				meta[ next_month.date(20).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 14:00' };
				
				var handler = {
					handleSelectCalendarMonth : (month) => {
						month.this_days.forEach( day => {
							if( meta[day.iso] ){
								day.classes.push(meta[day.iso].class); // apply has_note css class
								day.note = meta[day.iso].note; // set metadata
								day.renderView(); // re-render view
							}
						});
					},
					handleSelectCalendarDay : (day) => {
						alert( day.note || 'Free!' );
					}
				};
				
				class MyDay extends Craft.Widget.Calendar.Day {
					constructor(options){
						super(options);
						this.note = '';
					}
					style(componentId){
						return super.style(componentId) + `
							.today { background-color: lightgreen; }
							.has_note { background-color: #f2eb77; }
						`;
					}
				}
				
				var calendar = new Craft.Widget.Calendar.View({
					yyyy       : this_month.format('YYYY'),
					mm         : this_month.format('MM'),
					delegate   : handler,
					Day        : MyDay,
				});
				
				Craft.Core.Bootstrap.boot({
					didBootApplication : function(options){
						Craft.Core.Defaults.ALLOW_COMPONENT_SHORTCUT = true;
						calendar.loadView();
						document.getElementById('CraftRoot').appendChild(calendar.view);
					}
				});
			}
		};
	</script>
</head>
<body id="CraftRoot">
</body>
</html>
``` 

## License

MIT

