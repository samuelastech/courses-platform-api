const debug = require('debug');

class Controller {
  #service;
  #logger = debug('app:controller');

  constructor(service) {
    this.#service = service;
  }

  /**
   * Updates an entity
   * @param {Request} req 
   * @param {Response} res 
   */
  async update(req, res) {
    try {
      await this.#service.update(+req.params.id, req.body);
      return res.status(204).send();
    } catch (error) {
      this.#logger(error);

      if (/not found/.test(error.message)) {
        return res.status(404).json({
          errorMessage: error.message,
        });
      }

      return this.#internalServerError(res, error);
    }
  }

  /**
   * Deletes an entity
   * @param {Request} req 
   * @param {Response} res 
   */
  async delete(req, res) {
    try {
      await this.#service.delete(+req.params.id);
      return res.status(204).send();
    } catch (error) {
      this.#logger(error);
      return this.#internalServerError(res, error);
    }
  }

  /**
   * Creates an entity
   * @param {Request} req 
   * @param {Response} res 
   */
  async create(req, res) {
    try {
      const entity = await this.#service.create(req.body);
      return res.status(201).json(entity);
    } catch (error) {
      this.#logger(error);
      return this.#internalServerError(res, error);
    }
  }

  /**
   * Returns all entities
   * @param {Request} req 
   * @param {Response} res 
   */
  async findAll(_, res) {
    try {
      const entities = await this.#service.findAll();
      return res.json(entities);
    } catch (error) {
      this.#logger(error);
      return this.#internalServerError(res, error);
    }
  }

  /**
   * Returns one specific entity
   * @param {Request} req 
   * @param {Response} res 
   */
  async findOne(req, res) {
    try {
      const entity = await this.#service.findOne(+req.params.id);
      return res.json(entity);
    } catch (error) {
      this.#logger(error);

      if (/not found/.test(error.message)) {
        return res.status(404).json({
          errorMessage: error.message,
        });
      }

      return this.#internalServerError(res, error);
    }
  }

  #internalServerError(res, error) {
    return res.status(500).json({
      errorName: error.name,
      errorMessage: error.message,
    });
  }
}

exports.Controller = Controller;