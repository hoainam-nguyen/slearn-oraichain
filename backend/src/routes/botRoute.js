const express = require("express");
const route = express.Router();
const botController = require('../controllers/botController')

// Define endpoint
route.post("/create", botController.createBot) // Create
route.post("/update", botController.updateBot) // Update
route.get("/getbot", botController.getBot) // Get 

module.exports = route