// dependencies

const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// serve static content for app
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
const routes = require("./controllers/burger_controller");

app.use(routes);

//start server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
});

