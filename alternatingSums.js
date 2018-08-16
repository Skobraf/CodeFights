function alternatingSums(a) {
    let sum =0 , s =0;
    const arr = [];
    
    for(let i = 1; i < a.length ;i +=2){
        sum += a[i];   
    }
    for(let i = 0; i < a.length ; i +=2){
        s += a[i];
    }
    arr[0] = s;
    arr[1] = sum;
    return arr;
}
