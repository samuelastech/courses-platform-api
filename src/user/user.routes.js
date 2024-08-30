const { Router } = require('../common/router');
const database = require('../database/models');

const { UserService } = require('./user.service');
const { UserController } = require('./user.controller');

const userService = new UserService(database.User);
const userController = new UserController(userService);
const router = new Router(userController).router;

exports.usersRoutes = router;

