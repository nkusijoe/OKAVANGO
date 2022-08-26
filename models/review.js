const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Unit",
    required: true,
  }
})
module.exports = mongoose.model("User", userSchema);