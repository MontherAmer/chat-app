const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth } = require('../../app/middlewares');
const { messageControllers } = require('../../app/controllers');

router.post('/', isAuth, upload.single('attachment'), messageControllers.create);

router.get('/:contactId', isAuth, messageControllers.list);

module.exports = router;
