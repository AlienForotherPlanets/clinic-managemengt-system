const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  PatientName: {
    type: String,
    required: true,
  },

  ContactNumber: {
    type: Number,
    required: true
  },
  Dob: {
    type: Date,
  },
  BloodGroup: {
    type: String,
  },
  Occupation: {
    type: String,
  },
  Address: {
    type: String,
    require: true
  },
  Allergy: {
    type: Array,
  },
  Email: {
    type: String,
  }
})

module.exports = mongoose.model("Patient", patientSchema);