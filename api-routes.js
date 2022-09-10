let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is up and working',
        message: ''
    });
});

// Import contact controller
var contactController = require('./contactController');

// contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);


router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;
