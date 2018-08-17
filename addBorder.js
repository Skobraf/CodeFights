function addBorder(picture) {
    let a = picture[0].length;
    let b = "";
    for(let i =0; i< a; i++){
        b = b.concat("*"); 
    }
   let tab = ["*"+b+"*", "*"+b+"*"];
    for(let i = 0; i<picture.length; i++){
        tab.splice(i+1, 0, "*"+picture[i]+"*");
    }
    return tab;
}
