//var argscheck = require('cordova/argscheck');
//var channel = require('cordova/channel');
var exec = require('cordova/exec');
//var cordova = require('cordova');

//channel.createSticky('onCordovaInfoReady');
//channel.waitForInitialization('onCordovaInfoReady');

function KeyboardConstroller() {
	this.version = '1.0.0';
	//channel.onCordovaReady.subscribe(function() {
	//	self.getInfo(
	//		function() {
	//			//channel.onCordovaInfoReady.fire();
	//		},
	//		function(e) {
	//			console.error('[ERROR] Error initializing cordova-plugin-keyboard-controller: ' + e);
	//		}
	//	);
	//});
}

KeyboardConstroller.prototype.resizeWebview = function(arg0, success, error) {
	//argscheck.checkArgs('fF', 'Device.getInfo', arguments);
  exec(success, error, 'KeyboardConstroller', 'resizeWebview', [arg0]);
};

module.exports = new KeyboardConstroller();