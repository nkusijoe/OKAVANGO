const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  choice: {
    type: Array,
    required: true
  },
  userAnswer: {
    type: Array,
    required: true
},
  correctAnswer:  {
    type: Object,
    required: true
}
})
module.exports = mongoose.model("Exercise", exerciseSchema);