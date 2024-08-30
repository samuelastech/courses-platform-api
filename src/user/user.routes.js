const express = require('express');
const router = express.Router();
const database = require('../database/models');
const { UserService } = require('./user.service');
const { UserController } = require('./user.controller');

const userService = new UserService(database.User);
const userController = new UserController(userService);

router.get('/:id', userController.findOne.bind(userController));
router.get('/', userController.findAll.bind(userController));

exports.usersRoutes = router;

