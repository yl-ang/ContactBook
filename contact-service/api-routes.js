let router = require("express").Router();

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API is up and working",
    message: "",
  });
});

// Import contact controller
var contactController = require("./contactController");

// contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new)
  .all((req, res) => res.status(500).json({ error: "Internal Server Error" }));

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .put(contactController.update)
  .delete(contactController.delete)
  .all((req, res) => res.status(500).json({ error: "Internal Server Error" }));

router.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
  next(err);
});
// Export API routes
module.exports = router;
