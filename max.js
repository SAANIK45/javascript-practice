// Find max number 

var first = 6;
var second = 9;
var third = 10;
var four = 13;
var result = Math.max(first,second,third,four);
console.log(result);

// Find max number using function or i can use if else also

function findMaxNumber(one,two,three){
    result = Math.max(one,two,three);
    return result;
}
var output = findMaxNumber(11,33,55);
console.log(output);