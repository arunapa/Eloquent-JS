function isEven(number){
    if(number == 0)
        return "Even";
    else if(number == 1)
        return "Odd";
    return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
