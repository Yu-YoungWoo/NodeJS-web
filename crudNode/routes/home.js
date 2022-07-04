var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("home/welcome.ejs");
});

router.get("/about", function (req, res) {
  res.render("home/about.ejs");
});

module.exports = router;
