"use strict";

module.exports = function evenOrOdd(value, returnType = "str") {
  const number = Math.abs(value);

  if ((returnType === "str" || returnType === "bool") === false) {
    throw new Error(
      'Return type parameter must pass "str" to string or "bool" to boolean'
    );
  }

  if (Number(number) === number && number % 1 !== 0) {
    throw new Error("Number must be integer");
  }

  if (isNaN(number)) {
    throw new Error("Expected a number");
  }

  let result;

  if (returnType === "str") {
    result = number % 2 === 0 ? "even" : "odd";
  }

  if (returnType === "bool") {
    result = number % 2 === 0 ? 0 : 1;
  }

  return result;
};
