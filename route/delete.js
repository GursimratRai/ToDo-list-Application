const express = require("express");
const router = express.Router();

// Acquiring delete_controller.js
const deleteController=require('../controller/delete_controller');
//Call for the delete function for deleting the task from the database.
router.get('/delete-note',deleteController.delete);

module.exports = router;