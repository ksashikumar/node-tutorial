function addRequestId(req, res, next) {
  // console.log(req);
  req.request_id = "1add66fc-bd7f-4a6c-be2f-d8a648cf03dc";
  next();
}

module.exports = addRequestId;