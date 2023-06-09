//using .reduce()
//

const findTheOldest = function(array) {
  return array.reduce(function(accumulator, currentValue) {
    let accumulatorAge = getAge(accumulator.yearOfBirth, accumulator.yearOfDeath);
    let currentValueAge = getAge(currentValue.yearOfBirth, currentValue.yearOfDeath);
    let finalName;
    if (accumulatorAge > currentValueAge) {
        return accumulator;
    } else {
        return currentValue;
    }

   })
    
};

const getAge = function(birth, death) {
    if (death === undefined) {
        death = new Date().getFullYear();
    }
    return death - birth;

}

// Do not edit below this line
module.exports = findTheOldest;
