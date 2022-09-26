const express = require("express");
const AllergySchema = require("../models/AllergySchema");
const router = express.Router();


//add allergy API

router.post("/AddAllergy", async (req, res) => {
    const patientId = req.body.patientId;
    const DrugName = req.body.DrugName;
    const description = req.body.description;

    if (patientId == "" || DrugName == "" || description == "") {
        res.json({ "Status": "FieldsNotFiiled" });
    }
    else {
        const create_new_allergy = new AllergySchema({
            "patientId": patientId,
            "DrugName": DrugName,
            "description": description
        });
        create_new_allergy.save();
        res.json(create_new_allergy);
    }
});


//to fetch all the allergy of user

router.post("/FetchAllAllergy", async (req, res) => {
    const patientId = req.body.patientId;

    const data = await AllergySchema.find({ patientId });

    res.json(data);


});


module.exports = router;