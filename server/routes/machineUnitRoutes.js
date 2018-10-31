const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const machineUnit = mongoose.model("machineUnits");

// TODO: routeRequirements() instead requireLogin, requireCredits and etc.

module.exports = app => {
  app.get("/api/machineUnits", requireLogin, async (req, res) => {
    const machineUnits = await machineUnit.find({
      _user: req.user.id
    }).select({
      recipients: false
    });

    res.send(machineUnits);
  });

  app.post("/api/machineUnits", requireLogin, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new machineUnit({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email })),
      _user: req.body.id,
      dateSent: Date.now()
    });

    try {
      //await mailer.send();
      await survey.save();
      // req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (e) {
      console.log(e);
      res.status(422).send(e);
    }
  });
};

// chrome console test:
// const survey = { title: 'tiitle', subject: 'suubject', recipients: 'z0976190100@gmail.com', body: 'sooooo'};
//axios.post('/api/surveys', survey);
