const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log(
        "\n < authRoutes.js:15 > IN get('/auth/google/callback') --> response = \n"
      );
      console.log(res);
      res.redirect("/dashboard");
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log(
      "\n < authRoutes.js:24 > IN get('/api/logout') --> logging out request.user = \n"
    );
    console.log(req.user);
    req.logout();
    //res.send(req.user);
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    // res.send(req.session);
    console.log(
      "\n < authRoutes.js:31 > IN get('/api/current_user') --> response.data = \n"
    );
    console.log(req.user);
    res.send(req.user);
  });

  app.post("/api/signin", (req, res) => {
    //LOGGING
    console.log(
      "\n < authRoutes.js:45 > IN get('/api/signin') --> POST recieved, request=\n"
    );
    console.log(req);
    //END LOGGING
    res.send("POST SUCCESS");
  });
};
