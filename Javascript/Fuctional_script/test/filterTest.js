const filter = require('../filter');
const assert = require('assert');

function predi(val){
  return val % 2
}

describe('filter Test', function () {
  it('filter % 2 => [1,2,3,4] => [1,3]', function () {
    assert.equal(filter([1,2,3,4], predi), [1,3]);
  });
});

