var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Books = require("./models/Books");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BooksRouter = require('./routes/Books');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector'); 
var resourceRouter = require('./routes/resource'); 


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Books', BooksRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Books.deleteMany();
  let instance1 = new Books({Books_price:234,Books_category :"Romcom",Books_name:"Beach Read"});
instance1.save().then( () => {
  console.log('First object saved');
}).catch( (e) => {
  console.log('There was an error', e.message);
});

  let instance2 = new Books({Books_price:876,Books_category :"Thriller",Books_name:"Gone Girl"});
  instance2.save().then( () => {
    console.log('Second object saved');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });

  let instance3 = new Books({Books_price:237,Books_category :"Fantasy",Books_name:"The Way of Kings"});
  instance3.save().then( () => {
  console.log('Third object saved');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
 }
 
 let reseed = true;
 if (reseed) { recreateDB();}
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


