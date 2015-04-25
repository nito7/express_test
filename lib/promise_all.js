var Promise = require('bluebird');

var p1 = new Promise(function(onFulfilled, onRejected) {
  setTimeout(function() {
    onFulfilled(1);
  }, 1000);
});

var p2 = new Promise(function(onFulfilled, onRejected) {
  setTimeout(function() {
    onFulfilled(2);
  }, 2000);
});

Promise.all([p1, p2]).then(function(value) { console.log(value); });
