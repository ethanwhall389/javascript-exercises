// remove all of the spaces from the string
// create a new variable with the string reversed
// compare the new variable with the old


const palindromes = function (string) {
    let lowerCase = string.toLowerCase();
    let original = lowerCase.split('');
    let removeClutter = [];
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== original[i].toUpperCase()) {
            // This statement pushed to the new array if
            //the examined index is a letter
            removeClutter.push(original[i]);
        }
    }

    // the ... spread operator keeps .reverse from changing 
    // the original array
    let reversed = [...removeClutter].reverse();

    if (removeClutter.join() === reversed.join()) {
        console.log(`original: ${removeClutter}`);
        console.log(`reversed: ${reversed}`);
        return true;
    } else {
        console.log(`original: ${removeClutter}`);
        console.log(`reversed: ${reversed}`);
        return false;
    }
}










// Do not edit below this line
module.exports = palindromes;
