var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Book = mongoose.model('Book', { name: String });

var laravel = new Book({"name":"PHP"});

laravel.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("We're In");
// });

