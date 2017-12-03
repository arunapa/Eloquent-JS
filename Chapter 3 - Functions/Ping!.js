var PingFunction = function(){
    console.log("Pingef!");
}
var PingFunction = function(x){
    for(var i = 0; i < x; i++)
        console.log("Ping!");
}
PingFunction();
PingFunction(5);
