const express = require("express");
const route = express.Router();
const userController = require('../controllers/userController')

// Define endpoint
route.post("/create", userController.createUser) // Create
route.post("/update", userController.updateUser) // Update
route.post("/getbot", userController.getUser) // Get 

module.exports = route