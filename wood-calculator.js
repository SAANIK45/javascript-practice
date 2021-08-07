// Wood Calculator


function woodCalculator(tableQuantity,chairQuantity,bedQuantity) {

    const perTable = 10;
    const perchair = 3;
    const perBed = 50;

    needWoodTable = perTable * tableQuantity;
    needWoodChair = perchair * chairQuantity;
    needWoodBed = perBed * bedQuantity;

    totalWood = needWoodTable + needWoodChair + needWoodBed;
    return totalWood;
}

let result = woodCalculator(2,1,1);
console.log(result);