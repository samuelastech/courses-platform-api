const debug = require('debug');

class Controller {
  #service;
  #logger = debug('app:controller');

  constructor(service) {
    this.#service = service;
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

      return res.status(500).json({
        errorName: error.name,
      });
    }
  }

  /**
   * Returns one specific entity
   * @param {Request} req 
   * @param {Response} res 
   */
  async findOne(req, res) {
    try {
      const entity = await this.#service.findOne(req.params.id);
      return res.json(entity);
    } catch (error) {
      this.#logger(error);

      if (/not found/.test(error.message)) {
        return res.status(404).json({
          errorMessage: error.message,
        });
      }

      return res.status(500).json({
        errorName: error.name,
      });
    }
  }
}

exports.Controller = Controller;