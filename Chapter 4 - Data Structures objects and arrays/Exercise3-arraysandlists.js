var mylist = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}
console.log(mylist);

function arraytolist(arr){
    var l = arr.length;
    var list = null;
    list = {value: arr[l - 1], rest: list};
    for(var i = l - 2; i >= 0; i--)
        list = {value: arr[i], rest: list};
    return list;
}

function listtoarray(list){
    var array = [];
    while(list != null){
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function nth(list, n){
    var index = 0;
    do{
        if(index == n)
            return list.value;
        index++;
        list = list.rest;
    }while(list != null);
    return null;
}

var list = arraytolist([1,2,3]);
console.log(list);
var array = listtoarray(list);
console.log(array);
console.log(nth(list,2));
