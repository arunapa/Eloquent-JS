//rules of the game --->
//start from 1. you can either multiply by 3 or add 5
//not necessary to find the shortest path

function findSolution(num){
    function find(current, history){
        if(current > num)
            return null;
        else if(current == num)
            return history;
        else{
            return find(current + 5, "(" + history + "+5)") ||
                    find(current * 3, "(" + history + "*3)");
        }
    }
    return find(1, "1");
}

console.log(findSolution(24))
