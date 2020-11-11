const express = require('express');
const router = express.Router();

const { isAuth } = require('../../app/middlewares');
const { contactsControllers } = require('../../app/controllers');

router.post('/', isAuth, contactsControllers.create);

router.get('/', isAuth, contactsControllers.list);

router.delete('/:_id', isAuth, contactsControllers.block);

module.exports = router;
