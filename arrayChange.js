function arrayChange(inputArray) {
    var arr = inputArray;
    var moves =0
    for(let i=1; i<arr.length; i++) {
        while(arr[i] <= arr[i-1]) {
            arr[i] += 1, moves += 1
        }
    }
    return moves;
}
