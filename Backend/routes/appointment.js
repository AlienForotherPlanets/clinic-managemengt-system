const express = require("express");
const { Schema } = require("mongoose");
const router = express.Router();
const AppointmentDataSchema = require("../models/AppointmentDataSchema");
const patientSchema = require("../models/patientSchema");
const DoctorSchema = require("../models/DoctorSchema");

router.post("/BookAppointment", async (req, res) => {
    const CaseNumber = req.body.CaseNumber;
    const PatientName = req.body.PatientName;
    const DoctorName = req.body.DoctorName;
    const Service = req.body.Service;
    const Date = req.body.Date;
    const StartTime = req.body.StartTime;
    const EndTime = req.body.EndTime;

    const isPatient = await patientSchema.findOne({ PatientName: PatientName })
    const PatientId = isPatient._id;
    const isDoctor = await DoctorSchema.findOne({ DrName: DoctorName })
    const DoctorId = isDoctor._id;
    const isService = isDoctor.Services.indexOf(Service)
    const data = await AppointmentDataSchema.find({ StartTime, EndTime });
    if (isService == -1) {
        res.send({ ere: "Service not available " })
    }
    else if (data.length < 4) {

        const book_appointment = await AppointmentDataSchema({
            "CaseNumber": CaseNumber,
            "PatientName": PatientName,
            "PatientId": PatientId,
            "DoctorId": DoctorId,
            "DoctorName": DoctorName,
            "Service": Service,
            "Date": Date,
            "StartTime": StartTime,
            "EndTime": EndTime,


        });
        book_appointment.save();
        res.send(book_appointment);


    }
    else {
        res.send({ ere: "No slot available " })
    }

});

module.exports = router;