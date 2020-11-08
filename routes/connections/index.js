const express = require('express');
const router = express.Router();

const { isAuth } = require('../../app/middlewares');
const { connectionsControllers } = require('../../app/controllers');

router.post('/', isAuth, connectionsControllers.createConnection);

router.post('/group', isAuth, connectionsControllers.createGroup);

router.get('/', isAuth, connectionsControllers.listUsers);

router.get('/list', isAuth, connectionsControllers.list);

module.exports = router;
