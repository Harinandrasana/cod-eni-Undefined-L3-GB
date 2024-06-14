const express = require("express");
const router = express.Router();
const UsersController = require("../controlleur/usersController");

router.post('/register', UsersController.addUsers);
router.post('/login', UsersController.Authentification);
router.get('/getUsers', UsersController.getUsersC);

module.exports = router;