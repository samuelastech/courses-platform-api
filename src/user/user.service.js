class UserService {
  #repository;

  constructor (repository) {
    this.#repository = repository;
  }


  async getAll() {
    return this.#repository.findAll();
  }

  async getOne(id) {
    const user = await this.#repository.findByPk(+id);
    if (!user) throw new Error('User not found');
    return user;
  }
};

exports.UserService = UserService;