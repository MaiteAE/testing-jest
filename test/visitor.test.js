const { isClass } = require("./utilities");
const Visitor = require("../src/visitor")

let visitor = null

describe("Visitor", () => {
  beforeEach(() => {
    visitor = new Visitor();
  });

  describe("The Visitor class", () => {
    test("should be a class", () => {
      expect(isClass(Visitor)).toBe(true);
    });

    test("should have properties named access, and role", () => {
      expect(visitor).toHaveProperty("access");
      expect(visitor).toHaveProperty("role");
    });
  });
});