const User = require("../src/user")

class Visitor extends User {
  constructor(name, lastName, ) {
    super(name, lastName);
    this.role = "visitor";
    this.access = "partial";
    this.userId = "none";

  }
}

module.exports = Visitor
