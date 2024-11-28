const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUser);
router.get('/:userId/posts', userController.getUserPosts);
router.delete('/posts/:postId', userController.deletePost);

module.exports = router;