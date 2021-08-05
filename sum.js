//Sum of an array

const numbers = [12,43,23,54,14,11,44,45,22];
let sum = 0;
for(let i = 0 ; i < numbers.length ; i++){
    let element = numbers[i];
    sum = sum + element;
}
console.log(sum);

//using function

function sumOfArr(numbers){
    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let input = [12,43,23,54,14,11,44,45,22];
let result = sumOfArr(input);
console.log(result);