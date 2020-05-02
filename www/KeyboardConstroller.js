var exec = require('cordova/exec');

window.KeyboardConstroller = {
  resizeWebview: function (arg0, success, error) {
    exec(success, error, 'KeyboardConstroller', 'resizeWebview', [arg0]);
  }
};

