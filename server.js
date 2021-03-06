var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname : '.hbs' }));
app.set("view engine", "hbs");

// var routes = require("./controllers/order_controller.js");

// app.use(routes);

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
