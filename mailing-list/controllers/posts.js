const PostModel = require('../models/post');

async function list(req, res, next) {
  try {
    const posts = await PostModel.findAll();
    res.json({ data: posts });
  } catch (error) {
    next(error);
  }
}

async function show(req, res, next) {
  try {
    const postId = req.params.id;
    const post = await PostModel.findOne({ where: { id: postId } });
    res.json({ data: post });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const reqBody = req.body;
    const { title, content } = reqBody;
    const post = await PostModel.create({ title, content });
    res.json({ data: post });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    res.json({ status: true });
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    res.json({ status: true });
  } catch (error) {
    next(error);
  }
}

module.exports = { list, show, create, update, destroy };
