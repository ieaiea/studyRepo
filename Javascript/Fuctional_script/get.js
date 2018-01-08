const curry = require('./curry');

function get(obj, key){
  return obj === null ? undefined : obj[key];
}

module.exports = curry(get);