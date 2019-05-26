const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');
const BlogsController = require('../controllers/blogs');

router.get('/blogs', BlogsController.list);

router.get('/posts', PostsController.list);
router.get('/posts/:id', PostsController.show);
router.post('/posts', PostsController.create);
router.put('/posts/:id', PostsController.update);
router.delete('/posts/:id', PostsController.destroy);

module.exports = router;