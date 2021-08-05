//Simple interest app

function interestApp(principle,years){
    let timeline = years;
    let input = principle;
    let pay = 1 + 10/100 * timeline;
    pay = input * pay;
    return pay;
}
let amount = 4800;
let time = 4;
let result = interestApp(amount,time);  
console.log(result);