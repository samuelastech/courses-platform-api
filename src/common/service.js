class Service {
  #repository;
  
  constructor(repository) {
    this.#repository = repository;
  }

  async findAll() {
    return this.#repository.findAll();
  }

  async findOne(id) {
    const entity = await this.#repository.findByPk(+id);
    if (!entity) throw new Error('Entity not found');
    return entity;
  }
}

exports.Service = Service;
