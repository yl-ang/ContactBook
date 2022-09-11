let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
var MONGODB_URI = process.env.MONGODB_URI;

console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Website is up and running, visit /api/contacts to use contacts services'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
