const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const inventory = require("../services/inventory_number_generator");

const machineUnits = mongoose.model("machineUnits");

// TODO: routeRequirements() instead requireLogin, requireCredits and etc.

module.exports = app => {
  app.get("/api/machine_units", requireLogin, async (req, res) => {
    const machineUnits = await machineUnits
      .find({
        _user: req.user.id
      })
      .select({
        recipients: false
      });

    res.send(machineUnits);
  });

//FIXME: requireLogin!!!
  // TODO: requireAuth
  app.post("/api/machine_units", async (req, res) => {

    const {
      usage,
      producerBrand,
      model,
      serialNumber,
      voltage,
      power,
      description,
      hPressure,
      hVolume,
      oilType,
      airPressure,
      airConsumptionPerCycle,
    } = req.body;
 console.log(req.body);
 //   _user: req.body.id,
    const newUnit = new machineUnits({
      inventoryNumber: inventory(),
      usage,
      producerBrand,
      model,
      serialNumber,
      voltage,
      power,
      description,
      hPressure,
      hVolume,
      airPressure,
      airConsumptionPerCycle,
      _user: req.body.id,
      datePosted: Date.now()
    });
    console.log(newUnit.usage);
    try {
      await newUnit.save();
      //const user = await req.user.save();
      //res.send(user);
      res.status(200).json({success: true});
    } catch (e) {
      console.log(e);
      res.status(422).send(e);
    }
  });
};
