const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// load custom validator
// KUNG-FUSION: should i implement validation based on model schema?
const validateRegistrationData = require("../services/validation/customGeneralValidator");

//post helper functions
const postHelpers = {
  saveUser: (req, res) => {
    //validation of received data
    const {errors, isValid} = validateRegistrationData(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const {firstName, lastName, email, password} = req.body;
    console.log(req.body);
    //check if similar User already exists
    User.findOne({email: email})
      .then(user => {
        console.log(user);
        if (user) {
          // TODO: throw ERROR in such cases
          errors.push({
            parameter: "email",
            "exists": "User with this email already exists."
          });
          return res.status(400).json(errors);
        } else {
          // create avatar
          const avatar = gravatar.url(email,
            {
              s: "200", //size
              r: "pq", //rating
              d: "mm" //default
            }
          );
          // create new User and save it to DB
          const newUser = new User(
            {
              firstName,
              lastName,
              email,
              password,
              avatar
            }
          );
          // salting password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  const { id, firstName, lastName, email } = user;
                  res.json({
                    id,
                    firstName,
                    lastName,
                    email
                  });
                })
                .catch(err => {
                  console.log(
                    `\n < users.js:47 > ERROR: IN saveUser. While saving newUser we've got \n
                        ${err}`);
                  return res.status(400).json(err);
                });
            });
          });
        }
      })
  }
};

const getHelpers = {
  currentUser: (req, res) => {
    const {id, firstName, lastName, email} = req.user;
    res.json(
      {
        id,
        firstName,
        lastName,
        email
      });
  }
};

const deleteHelpers = {
  deleteUser: (req, res) => {
    Profile.findOneAndRemove({_user: req.user.id})
      .then(() => {
        User.findOneAndRemove({id: req.user.id})
          .then(() => res.json({success: true}))
          .catch(err => {
            console.log(
              `\n < users.js:133 > ERROR: IN deleteUser. While deleting User we've got  \n
                        ${err}`);
            return res.status(400).json(err);
          });
      })
      .catch(err => {
        console.log(
          `\n < users.js:138 > ERROR: IN deleteProfile. While deleting Profile we've got \n
                        ${err}`);
        return res.status(400).json(err);
      });

  }
};

// TODO: get allUsers controller
module.exports = app => {
// @route GET api/users/current
// @desc returns current logged user
// @access Private
  app.get(
    "/api/users/current",
    passport.authenticate("jwt", { session: false }),
    (req, res) => getHelpers.currentUser(req, res));


// @route POST api/users/
// @desc saves new user to DB
// @access Public
  app.post("/api/users", (req, res) => postHelpers.saveUser(req, res));

// @route DELETE api/users/
// @desc removes user and profile
// @access Private
  app.delete(
    "/api/users",
    passport.authenticate("jwt", { session: false }),
    (req, res) => deleteHelpers.deleteUser(req, res));
};
