var Promise = require('bluebird');

Promise.reject("failed").then(function(value) {
  console.log(value);
}).catch(function(error) {
  console.error(error);
});
