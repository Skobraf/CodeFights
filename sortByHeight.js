function sortByHeight(a) {
    const tab = a.filter(x => x>0);
    tab.sort((a,b) => a-b);
    let j =0;
    for(let i = 0; i < a.length ; i++){
        if(a[i] > 0){
            a[i] = tab[j];
            j = j+1;
        }
    }
   return a;
}
