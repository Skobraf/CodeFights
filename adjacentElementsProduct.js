function adjacentElementsProduct(inputArray) {
    var result = inputArray[0]*inputArray[1];
    for(var i = 0; i<inputArray.length; i++){
        var Product = inputArray[i]*inputArray[i+1];
        if(result<Product){
            result =Product;        
        }     
    }
    return result;
    console.log(result);
}
