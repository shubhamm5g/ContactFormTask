const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  email: { type: "string", required: true },
  phone: { type: "string", required: true },
  message: { type: "string", required: true },
  createdBy: {
    type: String,
    required: true,
    default: "1",
  },
  updatedBy: {
    type: String,
    required: true,
    default: "1",
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const detailsModel = mongoose.model("details", schema);
module.exports = detailsModel;
