const express = require('express');
const router = express.Router();

const { isAuth } = require('../../app/middlewares');
const { threadsControllers } = require('../../app/controllers');

router.post('/', isAuth, threadsControllers.createThread);

module.exports = router;
