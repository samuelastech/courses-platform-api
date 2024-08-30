const { Service } = require("../common/service");

class CategoryService extends Service {
  constructor (repository) {
    super(repository);
  }
};

exports.CategoryService = CategoryService;