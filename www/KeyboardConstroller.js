cordova.exec(
  function(winParam) {},
  function(error) {},
  "service",
  "action",
  ["firstArgument", "secondArgument", 42, false]
);

window.KeyboardConstroller = {
  resizeWebview(value) {
    console.log('value =', value);
  }
};

