/* eslint-disable no-undef */
const evenOrOdd = require("./index");

test("should insert a integer and return even", () => {
  expect(evenOrOdd(2)).toEqual("even");
});

test("should insert a integer and an 'str' parameter and return even", () => {
  expect(evenOrOdd(2, "str")).toEqual("even");
});

test("should insert a integer and return odd", () => {
  expect(evenOrOdd(1)).toEqual("odd");
});

test("should insert a integer and an 'str' parameter and return odd", () => {
  expect(evenOrOdd(1, "str")).toEqual("odd");
});

test("should insert a  string and return even", () => {
  expect(evenOrOdd("2")).toEqual("even");
});

test("should insert a  string  and an 'str' parameter and return even", () => {
  expect(evenOrOdd("2", "str")).toEqual("even");
});

test("should insert a string and return odd", () => {
  expect(evenOrOdd("1")).toEqual("odd");
});

test("should insert a  string  and an 'str' parameter and return odd", () => {
  expect(evenOrOdd("1", "str")).toEqual("odd");
});

test("should return an error if is not a number", () => {
  expect(() => {
    evenOrOdd("test");
  }).toThrow("Expected a number");
});

test("should return an error if is not a integer", () => {
  expect(() => {
    evenOrOdd(1.44);
  }).toThrow("Number must be integer");
});
