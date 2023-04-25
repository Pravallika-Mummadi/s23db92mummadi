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


/* GET detail Books page */
router.get('/detail', Books_controlers.Books_view_one_Page);


/* GET delete Books page */
router.get('/delete', Books_controlers.Books_delete_Page);
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

 router.get('/update',secured, Books_controlers.Books_update_Page);
 /* GET create Books page */
router.get('/create',secured, Books_controlers.Books_create_Page);

/* GET delete Books page */
router.get('/delete',secured, Books_controlers.Books_delete_Page);

module.exports = router;
// line 5 from Books.pug [  - let Book=[{Books_price:"234",Books_category :"Romcom",Books_name:"Beach Read"},{Books_price:"876",Books_category :"Thriller",Books_name:"Gone Girl"},{Books_price:"237",Books_category :"Fantasy",Books_name:"The Way of Kings"}]]