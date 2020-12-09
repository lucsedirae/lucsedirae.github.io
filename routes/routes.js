//* Dependencies
const path = require("path");
const db = require("../models");

module.exports = function(app) {
  //* Landing/index/root route
  app.get("/", (req, res) => {
    res.render("pages/index");
  });

  app.get("/about", (req, res) => {
    res.render("pages/about");
  });

  app.get("/contact", (req, res) => {
    res.render("pages/contact");
  });

  app.get("/portfolio", (req, res) => {
    res.render("pages/portfolio");
  });

  app.get("/words", (req, res) => {
    res.render("pages/words");
  });
};
