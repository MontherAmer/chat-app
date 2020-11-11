const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth, passport } = require('../../app/middlewares');
const { userControllers } = require('../../app/controllers');

router.put('/:_id', isAuth, upload.single('image'), userControllers.update);

router.get('/:_id', userControllers.getUserData);

module.exports = router;
