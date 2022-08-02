const db = require("../models");
const User = db.user;
  exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    // res.status(200).send("Admin Content.");
    User.findAll()
    .then(data => {
    if (!data) {
        return res.status(404).send("User Not found");
    }
    else{
        return res.status(200).send(data);
    }
    })
    .catch(err => {
        res.status(500).send(err);
    });
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };