function checkPalindrome(inputString) {
    var Palyndrome = inputString.split("").reverse().join("");
    if(Palyndrome === inputString){
        return true;
    }
    else
        return false;
}
