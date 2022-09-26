const mongoose = require("mongoose");
const { Schema } = mongoose;



const DrugAllergy = new Schema({
   "patientId": {
      type: String,
      required: true
   },
   "DrugName": {
      type: String,
      required: true
   },
   "date": {
      type: Date,
      default: Date.now
   },
   "description": {
      type: String,
      required: true
   }
});

module.exports = mongoose.model("Allergy", DrugAllergy); 