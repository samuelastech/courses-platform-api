const express = require('express');


class Router {
  #router = express.Router();

  constructor(controller) {
    this.#router.get('/:id', controller.findOne.bind(controller));
    this.#router.get('/', controller.findAll.bind(controller));
    this.#router.post('/', controller.create.bind(controller));
    this.#router.delete('/:id', controller.delete.bind(controller));
    this.#router.patch('/:id', controller.update.bind(controller));
  }

  get router() {
    return this.#router;
  }
}

exports.Router = Router;