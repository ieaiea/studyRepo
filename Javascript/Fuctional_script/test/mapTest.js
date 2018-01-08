const map = require('../map');
const get = require('../get');
const filter = require('../filter');

const list = [
  {"name": "A" , "age" : 30},
  {"name": "B" , "age" : 33},
  {"name": "C" , "age" : 20},
  {"name": "D" , "age" : 23},
  {"name": "E" , "age" : 24},
  {"name": "F" , "age" : 35}
  ];

const new_data = map(
  filter(list, function(user){return user.age >= 30}), get('name'));

console.log(new_data);