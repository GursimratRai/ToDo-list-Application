const Note = require('../models/note');

// function for deleting the task from the database
module.exports.delete=function(req,res){

    let id = req.query.id;
    console.log(id);
    Note.findByIdAndDelete(id,function(err){
    
        if(err){
            console.log(err);
            console.log('Error in deleting a note from database');
            return;
        }
        return res.redirect('/');
    });
}