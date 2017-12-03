var landscape = function(){
    var result = "";
    var flat = function(size){
        for(var i = 0; i < size; i++)
            result += "_";
    }
    var mountain = function(size){
        result += "/";
        for(var i = 0; i < size; i++)
            result += "^";
        result += "\\";
    }
    
    flat(5);
    mountain(6);
    flat(3);
    mountain(2);
    flat(4);
    return result;
};

console.log(landscape());
