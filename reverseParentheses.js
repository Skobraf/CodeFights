function reverseParentheses(s) {
 if(s.includes('(')){
  return reverseParentheses(rev(s));
 }
 return s;

}

function rev(s){ 
     let regex = /\(([^()]*)\)/i;
     let subStr = regex.exec(s)[1];
    console.log(subStr);
     subStr = subStr.split("").reverse("").join("");
   return s.replace(regex,subStr);
}
