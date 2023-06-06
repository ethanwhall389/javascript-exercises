const leapYears = function(enteredYear) {
    if (enteredYear % 4 === 0 && enteredYear % 100 != 0) {
        return true;
    }
    else if (enteredYear % 100 === 0 && enteredYear % 400 === 0) {
        return true;
    } else {
        return false;
    }
    };


// Do not edit below this line
module.exports = leapYears;
