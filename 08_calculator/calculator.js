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

const sum = function(array) {
    let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum+= array[i];
  }
  return Number(sum);
}; 

const multiply = function(array) {
  // start product at first num, since 0 * anything = 0.
  let product = array[0];
  let i = 1;
  while (i < array.length) {
    product = product * array[i];
    i++;
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let factorial = num;
  if (num === 0) {
    factorial = 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
    factorial = factorial * i;
    } 
  }
  return factorial;
  
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
