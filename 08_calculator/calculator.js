const add = function(...nums) {
  return nums.reduce((sum, number) => sum + number, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrNums) {
	return arrNums.reduce((sum, number) => sum + number, 0);
};

const multiply = function(arrNums) {
  return arrNums.reduce((product, number) => product * number);
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(num) {
	return num === 0 ?  1 : num  * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

add([]);