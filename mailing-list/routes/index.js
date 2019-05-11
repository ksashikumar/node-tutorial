const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');

router.get('/posts', PostsController.list);
router.get('/posts/:id', PostsController.show);
router.post('/posts', PostsController.create);
router.put('/posts/:id', PostsController.update);
router.delete('/posts/:id', PostsController.destroy);

module.exports = router;