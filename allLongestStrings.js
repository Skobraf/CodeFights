function allLongestStrings(inputArray) {
 
 const max = inputArray.map(x => x.length).reduce((a,b) => Math.max(a,b));
  
 return inputArray.filter(e => e.length == max);
 
}