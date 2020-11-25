//*dependencies
const express = require("express");
const path = require("path");

//*establish PORT
const PORT = process.env.PORT || 8080;

// *configure express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

//*import routing scripts
//!API route commented out until needed
// require("./routes/api-routes.js");
require("./routes/html-routes.js");

//*initialize server
app.listen(PORT);
console.log("Server listening on " + PORT);