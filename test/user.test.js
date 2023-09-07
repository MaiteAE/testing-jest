const User = require("../src/user");
const { isClass } = require("./utilities");

describe("User", () => {
  beforeEach(() => {
    user = new User();
  });

  describe("The User class", () => {
    test("should be a class", () => {
      expect(isClass(User)).toBe(true);
    });

    test("should have properties named name, lastName, and userId", () => {
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("userId");
    });
  });
});

