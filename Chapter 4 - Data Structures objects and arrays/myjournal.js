var myjournal = [];

function addEntry(whativedone){
    myjournal.push({
        events: whativedone
    });
}
addEntry(["Eating", "bathing", "coding", "eating"]);
console.log(myjournal);
