const each = require('./each');

function map(list, mapper){
  const new_list = [];
  each(list, function(val){
    new_list.push(mapper(val));
  });
  return new_list;
}

module.exports = map;