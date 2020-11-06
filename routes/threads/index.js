const express = require('express');
const router = express.Router();

const { isAuth } = require('../../app/middlewares');
const { threadsControllers } = require('../../app/controllers');

router.post('/', isAuth, threadsControllers.createThread);

router.get('/', isAuth, threadsControllers.listUsers);

module.exports = router;
