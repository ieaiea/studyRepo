var each = require('./each');

function filter(list, predi){
  const new_list = [];
  each(list, function(val){
    if(predi(val)) new_list.push(val);
  });
  return new_list;
}

module.exports = filter;