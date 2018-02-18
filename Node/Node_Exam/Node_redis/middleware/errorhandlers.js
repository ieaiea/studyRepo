exports.notFound = (req, res, next) => {
  res.send(404, 'You seem lost.');
};

exports.error = (err, req, res, next) => {
  console.log(err);
  res.send(500, 'Something broke.');
};