require('dotenv').config();

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var MONGODB_URI = process.env.MONGODB_URI || process.env.DB_LOCAL_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Website is up and running, visit /api/contacts to use contacts services'));

app.use('/api', apiRoutes);

app.listen(port, () => console.log("Contact-service listening on port " + port));
