
// find max value from an array

function largestElement(numbers) {
    let largest = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        let element  = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
let value = [22,33,55,66,77,88];
var result = largestElement(value);
console.log(result);
