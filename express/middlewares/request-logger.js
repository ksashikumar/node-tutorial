function requestLogger(req, res, next) {
  console.log(`New Request: Request ID: ${req.request_id}, Path: ${req.originalUrl}`);
  next();
}

module.exports = requestLogger;