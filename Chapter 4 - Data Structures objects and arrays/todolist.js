var todo = [];
function addTask(task){
    todo.push(task);
}
function addImmediate(task){
    todo.unshift(task);
}
function whatsNext(){
    return todo.shift();
}

addTask("Eating");
addTask("Eating2");
addImmediate("Sleeping");
console.log(todo);
whatsNext();
console.log(todo);

//push adds to rear and pop removes from rear
//shift adds to front and unshift removes from front
