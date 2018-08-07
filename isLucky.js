function isLucky(n) {
    
 const digits = n.toString(10).split("").map(x => parseInt(x));
 let len = digits.length/2;
 let sum =0;
 let a =0;
 let b =0;

 for(let i = len; i<digits.length; i++){
      a +=  digits[i];
 }
 for(let j = 0 ; j < len ; j++){
  b += digits[j];
 }
 if(a === b){
  return true;
 }
 return false;
}