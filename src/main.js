require('dotenv/config');
const debug = require('debug');
const express = require('express');
const log = debug('app:server');
const port = process.env.PORT;
const app = express();

const { usersRoutes } = require('./user/user.routes.js');
const { coursesRoutes } = require('./course/course.routes.js');
const { categoriesRoutes } = require('./category/category.routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRoutes);
app.use('/courses', coursesRoutes);
app.use('/categories', categoriesRoutes);

app.listen(port, () => log('Server is running at ' +  port));
