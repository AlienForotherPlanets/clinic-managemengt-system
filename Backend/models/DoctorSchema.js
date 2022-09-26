const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    "DrName": {
        type: String,
        required: true
    },
    "DrEmail": {
        type: String,
        required: true
    },
    "DrNumber": {
        type: Number,
        required: true,
    },
    "Services": {
        type: Array,
        required: true
    },
    "Monday": {
        type: Array,
        required: true
    },
    "Tuesday": {
        type: Array,
        required: true
    },
    "Wednesday": {
        type: Array,
        required: true
    },
    "Thursday": {
        type: Array,
        required: true
    },
    "Friday": {
        type: Array,
        required: true
    },
    "Saturday": {
        type: Array,
        required: true
    },
    "Sunday": {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("Doctor", DoctorSchema);
