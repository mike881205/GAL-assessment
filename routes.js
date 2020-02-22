var passport = require("./config/passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/register", function (req, res) {
  console.log("registering user");

  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****

  db.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(function () {
    res.json("user registered");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });

});

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

router.get("/api/logout", function (req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", function (req, res) {
  if (req.query.username) {
    db.User.find({
      where: { username: req.query.username }
    }).then(function (result) {
      res.json(result ? { length: result.length } : { length: 0 });
    }).catch(function (err) {
      res.json(err);
    })
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/api/authorized", isAuthenticated, function (req, res) {
  res.json(req.user);
});

router.post("/api/inputquestion", function (req, res) {
  db.Question.create({
    section: req.body.section,
    question: req.body.question
  }).then(function () {
    res.json("question added");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
})

router.post("/api/addClient", function (req, res) {
  db.Client.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    streetAddress: req.body.streetAddress,
    aptUnitNum: req.body.aptUnitNum,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    assessor: req.body.assessor,
    audit: req.body.audit,
    dwelling: req.body.dwelling,
    gateCode: req.body.gateCode
  }).then(function () {
    res.json("clent added");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
})

router.get("/api/getSections", function (req, res) {

  db.Section.findAll({})
  .then(dbSections => res.json(dbSections))
    .catch(err => {
      console.log(err);
      res.json(err);
    });


});

module.exports = router;
