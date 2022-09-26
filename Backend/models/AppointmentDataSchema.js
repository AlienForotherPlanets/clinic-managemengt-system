const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentDataSchema = new Schema({
    "CaseNumber": {
        type: String,
        required: true
    },
    "PatientName": {
        type: String,
        required: true
    },
    "PatientId": {
        type: ObjectId,
        required: true
    },

    "DoctorName": {
        type: String,
        required: true
    },
    "DoctorId": {
        type: ObjectId,
        required: true
    },
    "Service": {
        type: String,
        required: true
    },
    "Date": {
        type: String,
        required: true
    },
    "StartTime": {
        type: String,
        required: true
    },
    "EndTime": {
        type: String,
        required: true
    },


});

module.exports = mongoose.model("AppointmentData", AppointmentDataSchema);
