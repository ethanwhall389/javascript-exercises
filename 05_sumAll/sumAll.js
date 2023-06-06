const sumAll = function(startNum, endNum) {
    let finalSum = 0;
    if (typeof startNum != 'number' || typeof endNum != 'number') {
        return 'ERROR';
    } else {

        if (startNum < 0 || endNum < 0) {
            return'ERROR';
        }
        else if (startNum < endNum) {
            for (i = startNum; i < endNum + 1; i++) {
            finalSum += i;
        }
            return finalSum
        } else if (startNum > endNum) {
        for (i = endNum; i < startNum + 1; i++) {
            finalSum += i;
        }
        return finalSum
        } 

    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
