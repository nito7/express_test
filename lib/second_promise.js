// second_promise.js
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

fs.readFileAsync('second_promise.js', 'utf-8').then(function(value) {
  console.log(value);

  return new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      onFulfilled('setTimeout completed');
      //onRejected(new Error('setTimeout failed'));
    }, 2000);
  });

}).then(function(value) {
  console.log(value);
}, function(error) {
  console.error(error);
});
