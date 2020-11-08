const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth, passport } = require('../../app/middlewares');
const { userControllers } = require('../../app/controllers');

router.post('/signup', userControllers.store);

router.post('/login', userControllers.login);

// new
// router.get(
//   '/google',
//   (req, res, next) => {
//     console.log('!1111111111');
//     next();
//   },
//   passport.authenticate('google', {
//     scope: ['profile', 'email']
//   })
// );
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  console.log('DDDDDDDDDDDDDDDDDDDD');
  res.redirect('/profile');
});
// new

router.put('/:_id', isAuth, upload.single('image'), userControllers.update);

module.exports = router;
