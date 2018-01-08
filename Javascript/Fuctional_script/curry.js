function curry(fn) {
  return function (a, b) {
    return arguments.length === 2 ? fn(a, b) : function (b) {
      return fn(a, b);
    }
  }
}

module.exports = curry;