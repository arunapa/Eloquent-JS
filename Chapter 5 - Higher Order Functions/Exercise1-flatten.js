var myArr = [];

function reduce(array, index, len){
    if(index < len){
        for(var i = 0; i < array[index].length; i++){
            myArr.push(array[index][i]);
        }
        reduce(array, index+1, len);
    }
    return myArr;
}

var array = [[1, 2, 3], [4, 5], [6]];
console.log(reduce(array, 0, array.length));
