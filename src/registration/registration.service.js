const { Service } = require("../common/service");

class RegistrationService extends Service {
  constructor(repository) {
    super(repository);
  }
}

exports.RegistrationService = RegistrationService;
