var reverseArr = function(array){
    var myRevArr = [];
    var i = myArr.length;
    while(i > 0){
        myRevArr.push(myArr.pop());
        i--;
    }
    return myRevArr;
};

var reverseArrInPlace = function(array){
    var temp, l = array.length;
    for(var i = 0; i < l / 2; i++){
        temp = array[l - i - 1];
        array[l - i - 1] = array[i];
        array[i] = temp;
    }
};

var myArr = ["A", "B", "C", "D", "E"];
console.log(reverseArr(myArr));
var myArr2 = [1,2,3,4,5];
reverseArrInPlace(myArr2);
console.log(myArr2);
