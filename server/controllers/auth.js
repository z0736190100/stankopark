const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// load custom validator

//post helper functions
const postHelpers = {
  loginUser: (req, res) => {
    //check if user exists
    User.findOne({email: req.body.email})
      .then(user => {
        if (!user) {
          return res.status(404).json({email: "User not found."});
        }
        // unsalting and check if password is matching
        bcrypt.compare(req.body.password, user.password)
          .then(isMatch => {
            if (isMatch) {
              // user matches
              const {id, firstName, lastName, avatar, date} = user;
              const payload = {
                id,
                firstName,
                lastName,
                avatar,
                date
              };
              // sign Token
              jwt.sign(
                payload,
                keys.secretOrKey,
                {expiresIn: 3600},
                (err, token) => {
                  res.json(
                    {
                      ...payload,
                      token: "Bearer " + token
                    }
                  );
                });

            } else {
              return res.status(400).json({password: "Password is incorrect."});
            }
          });
      })
  }
};

module.exports = app => {
// @route POST api/users/login
// @desc saves new user to DB
// @access Public
  app.post("/api/login", (req, res) => postHelpers.loginUser(req, res));
};

