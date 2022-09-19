const { json } = require("body-parser");

// Import contact model
Contact = require("./contactModel.js");

// Handle index actions (retrieve)
exports.index = function (req, res) {
  try {
    Contact.get(function (err, contacts) {
      res.json({
        status: "success",
        message: "contacts retrieved successfully",
        data: contacts,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to retrieve contacts" });
  }
};

// Handles create contact actions
exports.new = function (req, res) {
  try {
    const { name, gender, email, phone } = req.body;

    if (!name || !email)
      return res.status(400).json({ message: "Missing name/email fields" });

    var contact = new Contact();
    contact.name = name;
    contact.gender = gender;
    contact.email = email;
    contact.phone = phone;

    contact.save(function (err) {
      res.json({
        message: "New contact created!",
        data: contact,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Unable to create new contact" });
  }
};

// Handles view contact info
exports.view = function (req, res) {
  try {
    const { contact_id } = req.params;

    if (!contact_id) {
      return res.status(400).json({ message: "Missing contact ID" });
    }

    Contact.findById(req.params.contact_id, function (err, contact) {
      if (!contact) {
        return res.status(500).json({ message: "Contact doesn't exist" });
      }
      res.json({
        message: "contact details loading ...",
        data: contact,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to view contact" });
  }
};

// Handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) {
      return res.status(500).json({ message: "Failed to update contact" });
    }

    if (!contact) {
      return res.status(500).json({ message: "Contact doesn't exist" });
    }
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender ? req.body.gender : contact.gender;
    contact.email = req.body.email ? req.body.email : contact.email;
    contact.phone = req.body.phone ? req.body.phone : contact.phone;

    contact.save(function (err) {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to save updated contact to database" });
      }

      res.json({
        message: "Contact Info updated",
        data: contact,
      });
    });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
  try {
    const { contact_id } = req.params;
    if (!contact_id) {
      return res.status(400).json({ message: "Missing contact ID" });
    }
    Contact.remove({ _id: contact_id }, function (err, contact) {
      if (!contact) {
        return res.status(500).json({ message: "Contact doesn't exist" });
      }
      res.json({
        status: "success",
        message: "Contact deleted",
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to delete contacts" });
  }
};
