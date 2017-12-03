function createArr(l, r, step){
    var myArr = [];
    for(var i = l; i <= r; i += step)
        myArr.push(i);
    return myArr;
}
function sumOf(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++)
        sum += array[i];
    return sum;
}

var myArr = createArr(1,10,1);
console.log(sumOf(myArr));
