function arglist(){
    console.log("You gave me", arguments.length, "arguments.");
}
arglist("1", "2", "3");

function addEntry(){
    var log = { events: [] };
    for(var i = 0; i < arguments.length; i++)
        log.events.push(arguments[i]);
    console.log(log);
}

addEntry("writing", "sleeping", "eating", "tumblring");
