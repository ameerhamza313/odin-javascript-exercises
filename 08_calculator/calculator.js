const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += Number(arrayOfNumbers[i]);
  }
  return sum;
};

const multiply = function (arrayOfNumbers) {
  return arrayOfNumbers.reduce((product, current) => product * current);
};

const power = function (baseNumber, exponentNumber) {
  return Math.pow(baseNumber, exponentNumber);
};

const factorial = function (number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
