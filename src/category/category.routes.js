const { Router } = require('../common/router');
const database = require('../database/models');

const { CategoryService } = require('./category.service');
const { CategoryController } = require('./category.controller');

const categoryService = new CategoryService(database.Category);
const categoryController = new CategoryController(categoryService);
const router = new Router(categoryController).router;

exports.categoriesRoutes = router;

