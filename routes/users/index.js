const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth, passport } = require('../../app/middlewares');
const { usersControllers } = require('../../app/controllers');

router.put('/:_id', isAuth, upload.single('image'), usersControllers.update);

router.get('/:_id', usersControllers.getUserData);

module.exports = router;
