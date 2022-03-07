const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
router.get('/user', usersController.getUser);
router.get('/users', usersController.getUsers);
router.post('/user', usersController.postUser);
router.put('/user', usersController.putUser);
router.delete('/user', usersController.deleteUser);

module.exports = router;