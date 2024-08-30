const { Service } = require("../common/service");

class UserService extends Service {
  constructor (repository) {
    super(repository);
  }
};

exports.UserService = UserService;