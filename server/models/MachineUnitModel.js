const mongoose = require("mongoose");
const { Schema } = mongoose;

// _user - relationship field,
// so underscore is name convention to reveal this fact
const machineUnitSchema = new Schema({
  inventoryNumber: Number,
  usage: String,
  producerBrand: String,
  model: String,
  serialNumber: {
    type: Number,
    default: 0
  },
  voltage: String,
  power: String,
  description: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  datePosted: Date
});

mongoose.model("machineUnits", machineUnitSchema);
