const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth } = require('../../app/middlewares');
const { groupsControllers } = require('../../app/controllers');

router.post('/', isAuth, groupsControllers.create);

module.exports = router;
