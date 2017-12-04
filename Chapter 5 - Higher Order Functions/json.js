var string = JSON.stringify({name: "Aruna", born: 1998});
console.log(string);
console.log(JSON.parse(string).born);
console.log(JSON.parse(string).name);
