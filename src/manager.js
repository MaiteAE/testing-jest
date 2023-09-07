const User = require("../src/user")

class Manager extends User{
  constructor(name, lastName, userId){
    super(name, lastName);
    this.role = "manager";
    this.access = "granted";
    this.userId = userId;
  }
}

module.exports = Manager;
