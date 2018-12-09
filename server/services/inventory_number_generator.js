//TODO
module.exports = () => {
  // formula:
  // DD-MEPHA-dddd
  // DD - digits, define placement of unit by production zone
  // M - mechanic, E - electric, P - pneumatic, H - hydraulic, A - heating
  // dddd - digits, number of unit by order of registration
  // generator must fetch the last record in DB to calculate dddd
  // DD and MEPHA is set according to data from save request
  return "01-EP-0099";
};