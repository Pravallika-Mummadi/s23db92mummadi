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
exports.Books_detail = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Books detail: ' + req.params.id);
    console.log("detail" + req.params.id)
    try {
        result = await Books.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.Books_delete = async function (req, res) {
   // res.send('NOT IMPLEMENTED: Books delete DELETE ' + req.params.id);
   
    console.log("delete " + req.params.id)
    try {
        result = await Books.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};



// Handle Books update form on PUT.
exports.Books_update_put = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Books update PUT' + req.params.id);
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Books.findById(req.params.id)
        // Do updates of properties
        if (req.body.Books_price) toUpdate.Books_price = req.body.Books_price;
        if (req.body.Books_category)toUpdate.Books_category = req.body.Books_category;
        if (req.body.Books_name) toUpdate.Books_name = req.body.Books_name;
        if (req.body.Books ) toUpdate.Books  = req.body.Books ;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


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

// Handle building the view for updating a Bookss.
// query provides the id
exports.Books_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Books.findById(req.query.id)
        res.render('Booksupdate', { title: 'Books Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.Books_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Books.findById(req.query.id)
        res.render('Booksdelete', { title: 'Books Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

   