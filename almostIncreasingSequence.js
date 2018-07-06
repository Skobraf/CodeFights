function almostIncreasingSequence(sequence) {
   var found = false;
  for (var i=0;i<sequence.length;i++) {
    if(sequence[i] <= sequence[i-1]) {
      if(found) {
        return false;
      }
      found = true;
       
      if(i === 1 || i + 1 === sequence.length) {
        continue;
      }
      else if (sequence[i] > sequence[i-2]) {
        sequence[i-1] = sequence[i-2];
      }
      else if(sequence[i-1] >= sequence[i+1]) {
        return false;
      }
    }
  }
  return true;
   
}
