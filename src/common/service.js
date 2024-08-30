class Service {
  #repository;
  
  constructor(repository) {
    this.#repository = repository;
  }

  async update(id, newData) {
    const updatedEntity = await this.#repository.update(newData, { where: { id } });
    if (updatedEntity[0] === 0) throw new Error('Entity not found');
  }

  async delete(id) {
    await this.#repository.destroy({ where: { id } }); 
  }

  async create(entity) {
    return this.#repository.create(entity);
  }

  async findAll() {
    return this.#repository.findAll();
  }

  async findOne(id) {
    const entity = await this.#repository.findByPk(id);
    if (!entity) throw new Error('Entity not found');
    return entity;
  }
}

exports.Service = Service;
