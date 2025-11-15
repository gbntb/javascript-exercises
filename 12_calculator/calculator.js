const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc += curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc *= curr);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	if (n === 0) return 1;
  
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }

  return f;
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
