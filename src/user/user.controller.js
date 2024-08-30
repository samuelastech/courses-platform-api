const { Controller } = require("../common/controller");

class UserController extends Controller {
  constructor(service) {
    super(service);
  }
}

exports.UserController = UserController;
