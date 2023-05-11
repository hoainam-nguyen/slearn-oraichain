const express = require("express");
const route = express.Router();
const userController = require('../controllers/userController')

route.post("/", userController.createUser)
route.post("/getuser", userController.getUser)
route.post('/update', userController.updateUser)
module.exports = route