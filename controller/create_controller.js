// Acquiring the Schema 
const Note = require('../models/note');

// function for creating the task and stored in the database
module.exports.create = function(req,res){
    console.log(req.body);
    Note.create(req.body,function(err,newNote){
       if(err){
           console.log('Error in creating the note on database');
           return;
       }
       return res.redirect('/');
    });
}