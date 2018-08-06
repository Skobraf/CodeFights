function commonCharacterCount(s1, s2) {
    
const str1 = s1.split('');
const str2 = s2.split('');
    let count = 0;
    
    for(var i=0;i<str1.length;i++){
        if(str2.indexOf(str1[i])>=0){
            count++;
            console.log(str2.indexOf(str1[i]));
            str2.splice(str2.indexOf(str1[i]),1);
            
        }
    }
    return count;

}
