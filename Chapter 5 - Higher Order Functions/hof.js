function greaterThan(n){
    return function(m) { return m > n; };
}

var value = greaterThan(10);
console.log(value(11));

function noisy(f){
    return function(arg){
        console.log(arguments.length);
        console.log("calling with", arg);
        var value = f(arg);
        console.log("calling with", arg, "- got", value);
        return value;
    };
}

noisy(Boolean)(1);
