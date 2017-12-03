function printFarm(label, number){
    function printFormat(number){
        if(number < 10)
            return "00" + number;
        else if(number < 100)
            return "0" + number;
    }
    console.log(label, ":", printFormat(number));
}

printFarm("cows", 7);
printFarm("chickens", 12);
printFarm("pigs", 3);
