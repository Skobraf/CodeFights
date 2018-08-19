function areSimilar(a, b) {
   if(a.toString() === b.toString()){
      return true;
   }
   
   var c = [];
   var d = [];
   
   for(var i = 0; i < a.length; i++){
      if(a[i] != b[i]){
         c.push(a[i]);
         d.push(b[i]);
      }   
   }
      d = d.reverse();
   console.log(d);
   console.log(c);
      if(c.toString() == d.toString()){
         console.log("true")
         return true;
      }
     return false;
}
