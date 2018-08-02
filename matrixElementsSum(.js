function matrixElementsSum(matrix) {
 var sum =0;
 for(let i =0; i< matrix.length-1; i++){
  for(let j =0;j<matrix[i].length; j++){
   if(matrix[i][j] == 0){
    matrix[i+1][j] = 0;
   }
  }
 }
 for(let index =0; index<matrix.length; index++){
  for(let a = 0; a <matrix[index].length; a++){
   sum += matrix[index][a];
  }
 }
 return sum;
}
