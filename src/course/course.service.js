const { Service } = require("../common/service");

class CourseService extends Service {
  constructor (repository) {
    super(repository);
  }
};

exports.CourseService = CourseService;