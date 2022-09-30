require("dotenv").config();

let cors = require("cors");
let express = require("express");

let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let app = express();
let apiRoutes = require("./api-routes");

const corsObject = {
  origin: true,
  credentials: true,
};

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors(corsObject)); // config cors so that front-end can use
app.options("*", cors(corsObject));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/resthub";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

var port = process.env.PORT || 8080;

app.get("/", (req, res) =>
  res.send(
    "Website is up and running, visit /api/contacts to use contacts services :))"
  )
);

app.use("/api", apiRoutes);

app.listen(port, () =>
  console.log("Contact-service listening on port " + port)
);

module.exports = app;
