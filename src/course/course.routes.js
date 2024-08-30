const { Router } = require('../common/router');
const database = require('../database/models');

const { CourseController } = require('./course.controller');
const { CourseService } = require('./course.service');

const courseService = new CourseService(database.Course);
const courseController = new CourseController(courseService);
const router = new Router(courseController).router;

exports.coursesRoutes = router;

