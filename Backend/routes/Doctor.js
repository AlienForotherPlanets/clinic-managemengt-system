const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const DoctorSchema = require("../models/DoctorSchema");

router.post('/AddDoctor', async (req, res) => {

    const DrName = req.body.DrName;
    const DrEmail = req.body.DrEmail;
    const DrNumber = req.body.DrNumber;
    const Services = req.body.Services;
    const Monday = req.body.Monday;
    const Tuesday = req.body.Tuesday;
    const Wednesday = req.body.Wednesday;
    const Thursday = req.body.Thursday;
    const Friday = req.body.Friday;
    const Saturday = req.body.Saturday;
    const Sunday = req.body.Sunday;

    if (DrName == "" || DrEmail == "" || DrNumber == "") {
        res.json({ "Status": "enter all the details" });
    }
    else {

        const create_new_patient = await DoctorSchema({
            "DrName": DrName,
            "DrEmail": DrEmail,
            "DrNumber": DrNumber,
            "Services": Services,
            "Monday": Monday,
            "Tuesday": Tuesday,
            "Wednesday": Wednesday,
            "Thursday": Thursday,
            "Friday": Friday,
            "Saturday": Saturday,
            "Sunday": Sunday
        });



        create_new_patient.save();
        res.json(create_new_patient);
    }
});

router.get('/FindDoctorById', async (req, res) => {

    const DrId = req.body.DrId;

    if (DrId == "") {
        res.json({ "Status": "enter DrId" });
    }
    else {
        const user = await DoctorSchema.findOne({ _id: DrId });
        res.send(user);

        if (!user) {
            res.json({ "Status": "user doesn't exist" });
        }
    }

});

router.get('/FindDoctorByName', async (req, res) => {

    const DrName = req.body.DrName;

    if (DrName == "") {
        res.json({ "Status": "enter DrId" });
    }
    else {
        const user = await DoctorSchema.findOne({ DrName });
        // req.json(user);
        console.log(user._id);
        res.send(user);

        if (!user) {
            res.json({ "Status": "user doesn't exist" });
        }
    }

});

router.get('/FindAllDoctor', async (req, res) => {
    const user = await DoctorSchema.find();
    res.send(user);

    if (!user) {
        res.json({ "Status": "user doesn't exist" });
    }

});
module.exports = router;