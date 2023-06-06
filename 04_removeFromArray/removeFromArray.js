const removeFromArray = function(array, ...args) {
    let newArray = [];
    
    for (const i of args) {
        let index = array.indexOf(i);
        if (index > -1) {
            array.splice(index, 1);
            console.log(array);
        } else {
            continue;
        }
    }
    
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;