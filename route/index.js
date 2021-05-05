// Acquiring Express
const express = require("express");
const router = express.Router();

// Acquiring the home controller
const homeController = require('../controller/home_controller');

console.log(homeController.home);

// Call the home controller function for '/'
router.get('/',homeController.home);
//Call another route i.e. create.js for '/create-note'
router.use('/',require('./create'));
//Call another route i.e. delete.js for '/delete-note'
router.use('/',require('./delete'));

//return router to index.js
module.exports = router;