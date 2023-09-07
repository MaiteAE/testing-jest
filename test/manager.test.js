const { isClass } = require("./utilities");
const Manager = require("../src/manager")

let manager = null

describe("Manager", () => {
  beforeEach(() => {
    manager = new Manager();
  });

  describe("The Manager class", () => {
    test("should be a class", () => {
      expect(isClass(Manager)).toBe(true);
    });

    test("should have properties named access, and role", () => {
      expect(manager).toHaveProperty("access");
      expect(manager).toHaveProperty("role");
    });
  });
});
