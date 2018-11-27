const passportOauth2 = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

// cookie stuff goes here with a little help of passportOauth2
passportOauth2.serializeUser((user, done) => {
  done(null, user);
});

passportOauth2.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
// cookie stuff END


passportOauth2.use(
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
          "\n < passportOauth2-oauth2.js:36 > IN passportOauth2.use( new GoogleStrategy ) --> const existingUser = \n"
        );
        console.log(existingUser);
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: JSON.stringify(profile["id"]),
        name: JSON.stringify(profile["name"])
      }).save();
      console.log("\n < passportOauth2-oauth2.js:47 > IN passportOauth2.use( new GoogleStrategy ) --> new User.save() --> const user = \n");
      console.log(user);
      done(null, user);
    }
  )
);
