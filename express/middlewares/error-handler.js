function errorHandler(err, req, res) {
  console.log(err);
  res.sendStatus(500);
}

module.exports = errorHandler;