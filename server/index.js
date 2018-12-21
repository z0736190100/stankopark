const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const morgan = require("morgan");
require("./models/User");
require("./models/MachineUnit");
require("./services/passport-oauth2");
require("./services/passport-jwt");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// lib to parse the POST req body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//
app.use(morgan("combined"));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./controllers/users")(app);
require("./controllers/oauth")(app);
require("./controllers/machineUnits")(app);
require("./controllers/auth")(app);


// deployment settings
if (process.env.NODE_ENV === "production") {
  // express will serve bundled files
  app.use(express.static("client/build"));

  // express will serve index.html if
  // request URI is not mapped on server
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

// enviroment of deploy server || dev server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("\n < server/index.js:48 > SERVER LISTENING ON PORT: ", PORT);