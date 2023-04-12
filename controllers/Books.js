var Books = require('../models/Books');
// List of all Bookss
exports.Books_list = async function (req, res) {
    //  res.send('NOT IMPLEMENTED: Books list');
    try {
        theBooks = await Books.find();
        res.send(theBooks);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Books.
exports.Books_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Books detail: ' + req.params.id);
};


// Handle Books create on POST.
exports.Books_create_post = async function (req, res) {
    
    console.log(req.body)
    let document = new Books();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Book_type":"goat", "Books_category":12, "Books_name":"large"}
    document.Books_price = req.body.Books_price;
    document.Books_category = req.body.Books_category;
    document.Books_name = req.body.Books_name;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Books delete form on DELETE.
exports.Books_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Books delete DELETE ' + req.params.id);
};


// Handle Books update form on PUT.
exports.Books_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Books update PUT' + req.params.id);
};

// // List of all Books
// exports.Books_list = async function(req, res) {
//     try{
//     theBooks = await Books.find();
//     res.send(theBooks);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//    };


// VIEWS
// Handle a show all view
exports.Book_view_all_Page = async function (req, res) {
    try {
        theBooks = await Books.find();
        res.render('Books', { title: 'Books Search Results', results: theBooks });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


   // Handle Book create on POST.
// exports.Book_create_post = async function(req, res) {
//     console.log(req.body)
//     let document = new Book();
//     // We are looking for a body, since POST does not have query parameters.
//     // Even though bodies can be in many different formats, we will be picky
//     // and require that it be a json object
//     // {"Book_type":"goat", "cost":12, "size":"large"}
//     document.Book_type = req.body.Book_type;
//     document.cost = req.body.cost;
//     document.size = req.body.size;
//     try{
//     let result = await document.save();
//     res.send(result);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//    };