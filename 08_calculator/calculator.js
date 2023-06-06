const add = function() {
	let totalSum = 0;
  for (i = 0; i < arguments.length; i++) {
    totalSum+= arguments[i];
  }
  return totalSum;
};

const subtract = function() {
	let finalSubtraction = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    finalSubtraction-= arguments[i];
  }
  return finalSubtraction;
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
