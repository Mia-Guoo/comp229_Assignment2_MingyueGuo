let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference to the model (dbschema )
let Business = require("../models/business");

module.exports.displayBusinessList = (req, res, next) => {
  Business.find((err, businessList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(businessList);
      res.render("business/list", {
        title: "Business Contact List",
        BusinessList: businessList,
        displayName: req.user ? req.user.displayName : "",
        //displayPnoneNumber: req.user ? req.user.displayPhoneNumber : "",
        //displayEmail: req.user ? req.user.displayEmail : "",
      });
      //render business.ejs and pass title and Businesslist variable we are passing Businesslist object to Businesslist property
    }
  }).sort({name:1});
};

module.exports.addpage = (req, res, next) => {
  res.render("business/add", {
    title: "Add Business Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newBusinessContact = Business({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  });
  Business.create(newBusinessContact, (err, Business) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the business list
      res.redirect("/business-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Business.findById(id, (err, businesstoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("business/edit", {
        title: "Edit Business Contact",
        business: businesstoedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatebusinessContact = Business({
    _id: id,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  });
  Business.updateOne({ _id: id }, updatebusinessContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the business list
      res.redirect("/business-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Business.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh business list
      res.redirect("/business-list");
    }
  });
};
