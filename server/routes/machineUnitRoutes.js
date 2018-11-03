const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const machineUnit = mongoose.model("machineUnits");

// TODO: routeRequirements() instead requireLogin, requireCredits and etc.

module.exports = app => {
  app.get("/api/machine_units", requireLogin, async (req, res) => {
    const machineUnits = await machineUnit
      .find({
        _user: req.user.id
      })
      .select({
        recipients: false
      });

    res.send(machineUnits);
  });

  app.post("/api/machine_units", async (req, res) => {

    const {
      inventoryNumber,
      usage,
      producerBrand,
      model,
      serialNumber,
      voltage,
      power,
      description
    } = req.body;
 console.log(req.body);
 //   _user: req.body.id,
    const newUnit = new machineUnit({
      inventoryNumber,
      usage,
      producerBrand,
      model,
      serialNumber,
      voltage,
      power,
      description,
      datePosted: Date.now()
    });
    console.log(newUnit.usage);
    try {
      await newUnit.save();
      //const user = await req.user.save();
      //res.send(user);
      res.status(200).send("success");
    } catch (e) {
      console.log(e);
      res.status(422).send(e);
    }
  });
};
