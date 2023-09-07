const sum = require("../src/sum");

describe("pruebas test funcion suma", ()=>{
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("lo que vamos a testear", function segundoArgumento() {
    expect(sum(4, 4)).toBe(8);
  });

});