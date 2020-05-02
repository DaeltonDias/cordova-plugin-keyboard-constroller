var exec = require('cordova/exec');

exports.resizeWebview = function(arg0, success, error) {
  exec(success, error, 'KeyboardConstroller', 'resizeWebview', [arg0]);
};

