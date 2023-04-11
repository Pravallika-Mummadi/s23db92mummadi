var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Books_controller = require('../controllers/Books');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Books ROUTES ///
// POST request for creating a Books.
router.post('/Books', Books_controller.Books_create_post);
// DELETE request to delete Books.
router.delete('/Books/:id', Books_controller.Books_delete);
// PUT request to update Books.
router.put('/Books/:id', Books_controller.Books_update_put);
// GET request for one Books.
router.get('/Books/:id', Books_controller.Books_detail);
// GET request for list of all Books items.
router.get('/Books', Books_controller.Books_list);
module.exports = router;