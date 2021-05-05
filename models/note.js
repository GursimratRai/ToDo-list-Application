// Acquiring mongoose
const mongoose = require('mongoose');
//Creating an object of the mongoose Schema  
const noteSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    date:{
        type : String,
        required:true
    }
});

//Creating the model and return
const Note = mongoose.model('note',noteSchema);

module.exports = Note;