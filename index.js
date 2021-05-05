// Acquiring Express
const express = require('express');

// Acquiring Path 
const path = require('path');

// assigning port 
const port = 8000; 

// Acquiring Mongodb Data base
const db = require('./config/mongoose');

// Acquiring the Schema
const Note = require('./models/note');

const app = express();

// Setting the view Engine
app.set('view engine',"ejs");

// Setting the path for the view engine
app.set('views',path.join( __dirname,'views'));

// Express In-Build Parser
app.use(express.urlencoded());

// Setting the Static Files
app.use(express.static('assets'));

// Acquiring route
app.use('/',require('./route'));

// Starting our Express Server
app.listen(port,function(err){
    if(err){
        console.log('Error in Running the Express Server');
        return;
    }
    console.log("Express Server is Running on Port = ",port);
});