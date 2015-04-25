var Promise = require('bluebird');

new Promise(function(onFulfilled, onRejected) {
  onRejected(new Error("ERROR"));
}).then(function(value) {
  console.log(value);
}).catch(function(error) {
  console.error(error);
});
