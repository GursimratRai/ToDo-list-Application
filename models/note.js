// Acquiring mongoose
const mongoose = require('mongoose');

//Creating an object of the mongoose Schema  
const noteSchema = new mongoose.Schema({
    description:{
        type : String,
        required : true
    },
    date:{
        type : String,
        required:true
    },
    category:{
        type : String
    },
    priority : {
        type : String 
    }
});

//Creating the model and return
const Note = mongoose.model('note',noteSchema);

module.exports = Note;