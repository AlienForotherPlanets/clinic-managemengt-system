const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    DoctorId: {
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
    Type: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model("doctor", userSchema);