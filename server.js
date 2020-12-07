//* Require dependencies
const express = require("express");
const ejs = require("ejs");

//*Define environment
const PORT = process.env.PORT || 8080;

//* Require database interaction models
const db = require("./models");

//* Create the app express instance and configure middleware for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//* Initialize rendering engine ejs
app.set("view engine", "ejs");

//* Require routes
require("./routes/routes.js")(app);

//* Sync database and log listener message
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. 🌎 <== ",
      PORT,
      PORT
    );
  });
});