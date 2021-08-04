// factorial using for

function factorial(value){
    let fact = 1;
    for(let i = 1; i <= value; i++ )
    fact = fact * i;
    console.log(fact);
}
let input = 5;
let result = factorial(input);

// factorial using while

function getFact(value){
    let factorial = 1;
    let i = 1;
    while(i<=value){
        factorial = factorial * i;
        i++;
        console.log(factorial);
    }
}
 let inputValue = 7;
 let res = getFact(inputValue);

// Factorial using a while loop or a decrementing loop
 function getFact(value){
    let factorial = 1;
    let i = value;
    while(i>=1){
        factorial = factorial * i;
        i--;
        console.log(factorial);
    }
}
 let inputValue = 7;
 let res = getFact(inputValue);
