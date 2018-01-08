function each(list, iter){
  for(var i = 0, len = list.length; i < len; i += 1){
    iter(list[i]);
  }
  return list;
}

module.exports = each;
