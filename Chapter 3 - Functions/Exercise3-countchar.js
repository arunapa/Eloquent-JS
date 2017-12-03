function countChar(string, char){
    var result = 0;
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) == char)
            result++;
    }
    return result;
}

console.log(countChar("BBC", "B"));
console.log(countChar("kakkerlak", "k"));
