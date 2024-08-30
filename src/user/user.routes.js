const { Router } = require('../common/router');
const database = require('../database/models');

const { UserService } = require('./user.service');
const { UserController } = require('./user.controller');

const { RegistrationService } = require('../registration/registration.service');
const { RegistrationController } = require('../registration/registration.controller');

const registrationService = new RegistrationService(database.Registration);
const registrationController = new RegistrationController(registrationService);

const userService = new UserService(database.User);
const userController = new UserController(userService);
const router = new Router(userController).router;

router.post('/:studentId/registrations', registrationController.create.bind(registrationController));

exports.usersRoutes = router;

