const express = require("express");
const mongo = require("mongoose");

const data = "mongodb://localhost:27017/Snehi_Clinic";
// const data = "mongodb+srv://yashVala:<YAShvala336c>@cluster0.zzn115n.mongodb.net/SnehiClinic";

const connection = () => {
    mongo.connect(data, () => {
        console.log("connected");
    });
}


module.exports = connection
