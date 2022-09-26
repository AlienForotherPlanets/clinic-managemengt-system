const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const patientSchema = require("../models/patientSchema");

const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

router.post('/AddPatient', async (req, res) => {
    const patientName = req.body.patientName;
    const Email = req.body.Email;
    const cardNo = req.body.cardNo;
    const Dob = req.body.Dob;
    const Occupation = req.body.Occupation;
    const BloodGroup = req.body.BloodGroup;
    const address = req.body.address;
    const ContactNo = req.body.ContactNo;
    const Allergy = req.body.Allergy;

    if (patientName == "" || Email == "" || address == "" || ContactNo == "") {
        res.json({ "Status": "enter all the details" });
    }
    else if (!regex.test(Password)) {
        res.json({ "Status": "enter appropriate pass" });
    }

    else {
        const exist = await patientSchema.find({ Email });

        if (exist.length != 0) {
            res.json({ "Status": "email id already exist..please enter different email.." });
        }
        else {
            const create_new_patient = await patientSchema({

                "patientName": patientName,
                "Email": Email,
                "cardNo": cardNo,
                "Dob": Dob,
                "Occupation": Occupation,
                "BloodGroup": BloodGroup,
                "address": address,
                "ContactNo": ContactNo,
                "Allergy": Allergy
            });



            create_new_patient.save();
            res.json(create_new_patient);
        }
    }
});

router.get('/FindPatientByName', async (req, res) => {

    const PatientName = req.body.PatientName;

    if (PatientName == "") {
        res.json({ "Status": "enter all the details" });
    }
    else {
        const user = await patientSchema.find({ patientName });
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