const path = require("path");
const db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.render("pages/index");
    });
}