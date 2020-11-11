const express = require('express');
const router = express.Router();

const { passport } = require('../../app/middlewares');
const { authControllers } = require('../../app/controllers');

router.post('/signup', authControllers.signUp);

router.post('/login', authControllers.localLogIn);

// Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google'), authControllers.googleLogIn);

// FaceBook login
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook'), authControllers.faceBookLogIn);

module.exports = router;
