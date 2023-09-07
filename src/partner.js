const User = require("../src/user")

class Partner extends User {
  constructor(name, lastName, userId) {
    super(name, lastName);
    this.role = "partner";
    this.access = "granted";
    this.userId = userId;
  }
}

module.exports = Partner;
