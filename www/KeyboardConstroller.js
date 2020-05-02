var exec = require('cordova/exec');

var KeyboardConstroller = function() {};

KeyboardConstroller.resizeWebview = function(arg0, success, error) {
  exec(success, error, 'KeyboardConstroller', 'resizeWebview', [arg0]);
};

module.exports = KeyboardConstroller;

