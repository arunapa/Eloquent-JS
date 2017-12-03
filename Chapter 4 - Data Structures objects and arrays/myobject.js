var myobject = {
    name : ["Aruna", "Aswathy", "Siddharth"],
    age : 19,
    college : "SRM"
};

console.log(myobject);
console.log(myobject.name);
console.log(myobject.age);
console.log(myobject.college);
console.log("name" in myobject);
delete myobject.age;
console.log("age" in myobject);

var obj1 = {name: "Aruna"};
var obj2 = obj1;
var obj3 = {name: "Aruna"};

console.log(obj1 == obj2);
console.log(obj1 == obj3);
