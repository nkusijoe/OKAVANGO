const mongoose = require("mongoose")

const unitSchema = new mongoose.Schema({
  tutorial: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    required: true
  }
})
module.exports = mongoose.model("Unit", unitSchema);