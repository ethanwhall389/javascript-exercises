// we need a function that loops however many times the arg is set for.
//      each iteration, it pushes the current value into an array.
// this way, we can go back at any time and retrieve values from the 
//      array to add.

// if the arg is less than 3, the answer will always be 1
//    so, we start with a conditional to check if the arg is less than 3.
//    if it is, we return 1, otherwise we continue. 
//declare a var that holds an array of [1, 1]. This is because
//    if it passed the conditional, it has to have at least 3 in it.
//declare an empty var that will be our final num.
//Create a for loop that begins at 2 and progresses until
//  the num arg is set for.
//each iteration, it puts array[i - 1] + array [i - 2] into finalNum.

const fibonacci = function(member) {
    if (member < 3 && member > -1) {
        return 1
    } else if (member < 0) {
        return 'OOPS';
    } else {
        let sequence = [1, 1];
        let finalNum;
        for (let i = 2; i < member; i++) {
            finalNum = sequence[i - 1] + sequence[i - 2];
            sequence.push(finalNum);
        }
        return finalNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
