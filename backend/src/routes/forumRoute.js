const express = require("express");
const route = express.Router();
const forumController = require("../controllers/forumController")

// Define endpoint
route.post("/create", forumController.createForum) // Create
route.post("/update", forumController.updateForum) // Update
route.get("/getthread", forumController.getForum) // Get 

module.exports = route