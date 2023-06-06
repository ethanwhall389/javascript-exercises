const removeFromArray = function(array, numToRemove) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] != numToRemove) {
            newArray.push(array[i]);
        } else {
            continue;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
