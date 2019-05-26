const BlogModel = require('../models/blog');

async function list(req, res, next) {
  try {
    const blogs = await BlogModel.find();
    res.json({ data: blogs });
  } catch (error) {
    next(error);
  }
}

module.exports = { list };
