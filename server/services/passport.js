const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

// cookie stuff goes here with a little help of passport
passport.serializeUser((user, done) => {
  console.log(
    "\n < passport.js:10 > IN passport.serializeUser( user, done ) --> const user = \n"
  );
  console.log(user);
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    console.log(
      "\n < passport.js:17 > IN passport.deserializeUser( id, done ) --> const user = \n"
    );
    console.log(user);
    done(null, user);
  });
});
// cookie stuff END

// TODO: salting goggleId

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: JSON.stringify(profile["id"])
      });
      if (existingUser) {
        console.log(
          "\n < passport.js:36 > IN passport.use( new GoogleStrategy ) --> const existingUser = \n"
        );
        console.log(existingUser);
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: JSON.stringify(profile["id"]),
        name: JSON.stringify(profile["name"])
      }).save();
      console.log("\n < passport.js:47 > IN passport.use( new GoogleStrategy ) --> new User.save() --> const user = \n");
      console.log(user);
      done(null, user);
    }
  )
);
