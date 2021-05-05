// Acquiring the Schema of a task 
const Note = require('../models/note');

//function for finding everything from the database and send to home.ejs in notelist for rendering
module.exports.home = function(req,res){

    Note.find({},function(err,notelist)
    {
        if(err)
        {
            console.log('Error in fetching from the database'); 
            return;
        }
    
       return res.render('home',{
            notes:notelist
       });
    });
}


