// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Books', { title: 'Search Results'});
// });

// module.exports = router;

var express = require('express');
const Books_controlers= require('../controllers/Books');
var router = express.Router();
/* GET Books */
router.get('/', Books_controlers.Book_view_all_Page );
module.exports = router;