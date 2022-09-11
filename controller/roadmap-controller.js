const e = require("express");
const mongoose = require("mongoose");

const patient = require("../model/patient");

const getAllpatients = async (req, res, next) => {
    let patients;
    try {
        patients = await patient.find();
    } catch (e) {
        console.log(e);
    }

    if (!patients) {
        return res.status(404).json({
            success: false,
            response: {
                code: patient_added_fail,
                message: "patient not found",
            },
        });
    }

    return res.status(200).json({ patients });
};

const addNewpatients = async (req, res, next) => {
    console.log(req.body);
    const { title, desc, link, user } = req.body;

    let existingUser;

    try {
        console.log(title, desc, user);
        existingUser = await User.findById(user);
        console.log(existingUser);
    } catch (e) {
        return console.log(e);
    }
    if (!existingUser) {
        return res.status(400).json({ message: " Unautorized" });
    }

    const patient = new patient({
        title,
        desc,
        link,
        user,
    });

    try {
        await patient.save();

        return res.status(200).json({
            success: true,
            response: {
                code: "patient_added_success",
                message: "",
                data: {
                    patient,
                },
            },
        });
    } catch (e) {
        return res.status(403).json({
            success: false,
            response: {
                code: patient_added_fail,
                message: e,
            },
        });
    }
};
module.exports = { getAllpatients, addNewpatients };
