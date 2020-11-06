const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth } = require('../../app/middlewares');
const { userControllers } = require('../../app/controllers');

router.post('/signup', userControllers.store);

router.post('/login', userControllers.login);

router.put('/:_id', isAuth, upload.single('image'), userControllers.update);

module.exports = router;
