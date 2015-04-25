// first_promise.js
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

fs.readFileAsync('first_promise.js', 'utf-8').then(function(value) {
  console.log(value);
}, function(error) {
  console.error(error);
});
