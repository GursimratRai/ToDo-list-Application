const express = require("express");
const router = express.Router();

//Acquiring create_controller.js
const createController = require('../controller/create_controller');
//Call for create controller's function for creating a task and store in a database.
router.post('/create-note',createController.create);

module.exports = router;