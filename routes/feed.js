const express = require('express');

const router = express.Router();

const feedController = require('../controller/feed')

//GET -> /feed/post
router.get('/posts',feedController.getPosts);

module.exports = router;