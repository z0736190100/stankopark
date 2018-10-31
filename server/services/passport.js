const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

// cookie stuff goes here with a little help of passport
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});
// cookie stuff END

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientId,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {

            const existingUser = await User.findOne(
                {
                    googleId: JSON.stringify(profile['id'])
                }
            );
            if (existingUser)
                return done(null, existingUser);
            const user = await new User(
                {
                    googleId: JSON.stringify(profile['id']),
                    name: JSON.stringify(profile['name'])
                }
            ).save();
            done(null, user);
        }
    )
);
