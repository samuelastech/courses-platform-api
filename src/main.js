require('dotenv/config');
const debug = require('debug');
const express = require('express');
const log = debug('app:server');
const port = process.env.PORT;
const app = express();

const { usersRoutes } = require('./user/user.routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRoutes);

app.listen(port, () => log('Server is running at ' +  port));
