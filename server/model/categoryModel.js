const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  detialsId: { type: String, required: true },
  options: { type: String, required: true },
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

const categoryModel = mongoose.model("category", schema);
module.exports = categoryModel;
