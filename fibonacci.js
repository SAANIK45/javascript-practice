/* 
6th = 5th+4th 
ith = (ith-1)+(ith-2)
*/
// Fibonacci series 

function fibo(numbers,quantity) {
    if(typeof quantity != 'number'){
        return 'please enter valid input'
    }
    else if(quantity < 2){
        return 'please enter a positive number grater than 1'
    }
    //parameter value
    let value = numbers;
    let num = quantity;
    for(let i = 2 ; i < quantity ; i++){
        //fibonacci rules
        value[i]=value[i-1]+value[i-2];
    }
    return value;
}
let result = fibo([0,1],2);
console.log(result);

