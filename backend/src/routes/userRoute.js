const express = require("express");
const route = express.Router();
const userController = require('../controllers/userController')

// Define endpoint
route.get("/check", userController.checkUser)
route.get("/getuser", userController.getUser) // Get 
route.post("/create", userController.createUser) // Create
route.post("/update", userController.updateUser) // Update

module.exports = route