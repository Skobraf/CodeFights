function makeArrayConsecutive2(statues) {
var tab = statues.sort();
    /*
    var n=0;
    for(var i =0; i<tab.length-1 ; i++){
        if(tab[i+1]-tab[i] !=1)
          n = n+ tab[i+1]-tab[i]-1;
    }
    return n;
    */
   
   statues=statues.sort((a,b)=>a-b);
   return(statues[statues.length-1]-statues[0]+1-statues.length);

   
}


