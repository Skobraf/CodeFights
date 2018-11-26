function arrayMaximalAdjacentDifference(inputArray) {
    var absoluteDifference = []
   for(var i = 0; i < inputArray.length-1; i++) {
      absoluteDifference.push(Math.abs((inputArray[i] - inputArray[i+1] )));     
   }
   return Math.max(...absoluteDifference);
}
