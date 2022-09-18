var mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  phone: String,
});

var Contact = (module.exports = mongoose.model("contact", contactSchema));

module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
};
