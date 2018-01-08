function curryr(fn) {
  return function (a, b) {
    return arguments.length === 2 ? fn(a, b) : function (b) {
      return fn(b, a);
    }
  }
}

module.exports = curryr;