const express = require('express');
const router = express.Router();
const database = require('../database/models');
const { UserService } = require('./user.service');

const userService = new UserService(database.User);

router.get('/:id', async (req, res) => {
  try {
    const user = await userService.getOne(req.params.id);
    return res.json(user);
  } catch (error) {
    if (/not found/.test(error.message)) {
      return res.status(404).json({
        errorMessage: error.message,
      });
    }

    return res.status(500).json({
      errorName: error.name,
    });
  }
});

router.get('/', async (_, res) => {
  try {
    const users = await userService.getAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      errorName: error.name,
    });
  }
});

exports.usersRoutes = router;

