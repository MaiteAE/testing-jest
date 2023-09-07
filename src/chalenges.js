class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.userId = 0;
    this.role = "";
  }
}

const peter = new User("Peter", "Parker");
console.log(peter);

class Manager extends User {
  constructor(name, lastName, userId) {
    super(name, lastName);
    this.role = "manager";
    this.access = "granted";
    this.userId = userId;
  }
}

const laura = new Manager("Laura", "Montes", 10001);
console.log(laura);


class Partner extends User {
  constructor(name, lastName, userId){
  super(name, lastName)
    this.role = "partner";
    this.access = "granted";
    this.userId = userId;
  }
};

const john = new Partner("John", "Lewis",20001);
console.log(john);

class Visitor extends User {
  constructor(name, lastName) {
    super(name, lastName);
    this.role = "visitor";
    this.access = "partial";
    this.userId = "none";
  }
}

const visitor1 = new Visitor("John", "Smith");
console.log(visitor1);