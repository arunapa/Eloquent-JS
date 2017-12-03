var myarray = [1,2,3,4,5,2];
console.log(myarray.indexOf(2));
console.log(myarray.lastIndexOf(2));
console.log(myarray.slice(2,5));
console.log(myarray.slice(2));
console.log(remove(myarray, 4));

function remove(array, index){
    return myarray.slice(0, index) .concat(myarray.slice(index+1, myarray.length));
}
