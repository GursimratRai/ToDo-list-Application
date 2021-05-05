// Requiring the library i.e. mongoose
const mongoose = require('mongoose');
//Establishing the connection with the mongodb database
mongoose.connect('mongodb://localhost/ToDo_list_db');

//Acquiring the connection
const db = mongoose.connection;

//If connection is not established i.e. Throw an Error
db.on('error',console.error.bind(console,'Error in connecting to database'));

//If connection is Established then print the message.
db.once('open',function(){
    console.log('Successfully connecting to database');
});

