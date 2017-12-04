var array = [1, 2 , 3, 4 ,5], sum = 0;
function forEach(array, action){
    for(var i = 0; i < array.length; i++)
        action(array[i]);
}
forEach(array,console.log);
forEach(array, function(number){sum += number;} );
console.log(sum);
