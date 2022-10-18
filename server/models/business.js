let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let businessModel = mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    email: String,
  },
  {
    collection: "business_contact",
  }
  
);

//businessmodel to create new business more powerful than just class
module.exports = mongoose.model("Business", businessModel);


