var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

//Sets handlebars
var exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes & gives the server access to the routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

//Starts server to listen
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
