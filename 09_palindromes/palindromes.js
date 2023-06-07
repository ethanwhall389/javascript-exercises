// remove all of the spaces from the string
// create a new variable with the string reversed
// compare the new variable with the old



const palindromes = function (string) {
    // splits string into array and removes the spaces.
    let original = string.split(' ');
    let reversed = original.reverse();
    if (original === reversed) {
        return true;
    } else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
