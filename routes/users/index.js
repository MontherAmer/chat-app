const express = require('express');
const router = express.Router();

const { userControllers } = require('../../app/controllers');

router.post('/signup', userControllers.store);

router.post('/login', userControllers.login);

module.exports = router;
