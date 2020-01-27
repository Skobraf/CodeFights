function avoidObstacles(inputArray) {
    return recursiveArray(2,inputArray)
}

function recursiveArray(n,inputArray) {
    let result = n;
    let tab = [];    
        if(inputArray.every((e) => e % result !== 0)) {
            return result
        } else
            result ++;
            return recursiveArray(result,inputArray);
    
}

