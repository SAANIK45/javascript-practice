// Even check

function isEven(value){
    if(value%2 == 0){
        return true;
    }
    return false;
}

var numberEven = 24;
var evenResult = isEven(numberEven);
console.log('Number is even and '+ evenResult);

// Odd check

function isOdd(value){
    if(value%2 != 0){
        return true;
    }
    return false;
}

var numberOdd = 21;
var oddResult = isOdd(numberOdd);
console.log('Number is odd and '+ oddResult);