const { User } = require('../models');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/user/google/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('GOOGLE ', profile);
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

exports.passport = passport;
