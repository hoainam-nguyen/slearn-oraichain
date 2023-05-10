const express = require("express");
const route = express.Router();
const userController = require('../controllers/userController')

route.post("/", userController.createUser)
route.get("/", userController.getUser)
route.post('/update', userController.updateUser)
module.exports = route