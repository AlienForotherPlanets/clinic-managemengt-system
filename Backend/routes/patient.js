const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const patientSchema = require("../models/patientSchema");

router.post('/AddPatient', async (req, res) => {
    const PatientName = req.body.PatientName;
    const Email = req.body.Email;
    const Dob = req.body.Dob;
    const Occupation = req.body.Occupation;
    const BloodGroup = req.body.BloodGroup;
    const address = req.body.Address;
    const ContactNo = req.body.ContactNumber;
    const Allergy = req.body.Allergy;

    if (PatientName == "" || address == "" || ContactNo == "") {
        res.json({ "Status": "enter all the details" });
    } else {
        const create_new_patient = await patientSchema({

            "PatientName": PatientName,
            "Email": Email,
            "Dob": Dob,
            "Occupation": Occupation,
            "BloodGroup": BloodGroup,
            "address": address,
            "ContactNumber": ContactNo,
            "Allergy": Allergy
        });



        create_new_patient.save();
        res.json(create_new_patient);
    }
});

router.get('/FindPatientByName', async (req, res) => {

    const PatientName = req.body.PatientName;

    if (PatientName == "") {
        res.json({ "Status": "enter all the details" });
    }
    else {
        const user = await patientSchema.find({ PatientName });
        res.send(user);
        if (!user) {
            res.json({ "Status": "user doesn't exist" });
        }
    }

});

router.get('/FindPatientById', async (req, res) => {

    const PatientId = req.body.PatientId;
    if (PatientId == "") {
        res.json({ "Status": "enter all the details" });
    }
    else {
        const user = await patientSchema.findOne({ _id: PatientId });
        res.send(user);
        if (!user) {
            res.json({ "Status": "user doesn't exist" });
        }
    }

});

router.get('/FindAllPatient', async (req, res) => {
    const user = await patientSchema.find();
    res.send(user);
    if (!user) {
        res.json({ "Status": "user doesn't exist" });
    }

});

module.exports = router;