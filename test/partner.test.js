const { isClass } = require("./utilities");
const Partner = require("../src/partner")

let partner = null

describe("Partner", () => {
  beforeEach(() => {
    partner = new Partner();
  });

  describe("The Partner class", () => {
    test("should be a class", () => {
      expect(isClass(Partner)).toBe(true);
    });

    test("should have properties named access, and role", () => {
      expect(partner).toHaveProperty("access");
      expect(partner).toHaveProperty("role");
    });
  });
});
