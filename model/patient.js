const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    PatientId: {
        type: Number,
        required: true,
    },

    Name: {
        type: String,
        required: true,
        unique: true,
    },

    MobileNumber: {
        type: Number,
        required: true,
        length: 10
    },

    Email: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
    Time: {
        type: TimeRanges,
        require: true
    },
    Occupation: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    Allergy: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Patient", userSchema);