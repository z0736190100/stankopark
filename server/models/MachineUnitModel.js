const mongoose = require("mongoose");
const { Schema } = mongoose;

// _user - relationship field,
// so underscore is name convention to reveal this fact
const machineUnitSchema = new Schema(
  {
    inventoryNumber: {
      type: Number,
      // KUNG-FUSION: can we do custom implementation for value generator in mongoose
      required: true
    },
    usage: {
      type: String,
      required: true
    },
    producerBrand: {
      type: String,
      default: "Nonamer Inc."
    },
    model: {
      type: String,
      default: "model.no.1"
    },
    serialNumber: {
      type: String,
      default: "0.00.0"
    },
    documentationLink: {
      type: String,
      default: "no"
    },
    voltage: {
      type: String
    },
    power: {
      type: String
    },
      hPressure:{
        type: Number,
      },
      hVolume: {
        type: Number
    },
      airPressure: {
        type: Number
      },
      airConsumptionPerCycle: {
        type: Number
    },
    description: {
      type: String,
      required: true
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    datePosted: {
      type: Date,
      default: Date.now()
    }
  });

mongoose.model("machineUnits", machineUnitSchema);
