import { evenOrOdd } from "../src/index";

const { isEvenOrOdd, isEven, isOdd } = evenOrOdd();

describe("verify isEven method results", () => {
  test("should return true result on isEven method", () => {
    const result = isEven(4);
    expect(result).toEqual(true);
  });

  test("should return false result on isEven method", () => {
    const result = isEven(3);
    expect(result).toEqual(false);
  });
});

describe("verify isOdd method results", () => {
  test("should return true result on isOdd method", () => {
    const result = isOdd(3);
    expect(result).toEqual(true);
  });

  test("should return false result on isOdd method", () => {
    const result = isOdd(4);
    expect(result).toEqual(false);
  });
});

describe("verify isEvenOrOdd method results", () => {
  test("should return even as result", () => {
    const result = isEvenOrOdd(4);
    expect(result).toEqual("even");
  });

  test("should return odd as result", () => {
    const result = isEvenOrOdd(3);
    expect(result).toEqual("odd");
  });

  test("should return true for even result when are passing returnAsBool parameter", () => {
    const result = isEvenOrOdd(4, true);
    expect(result).toEqual(true);
  });

  test("should return false for odd result when are passing returnAsBool parameter", () => {
    const result = isEvenOrOdd(3, true);
    expect(result).toEqual(false);
  });
});
