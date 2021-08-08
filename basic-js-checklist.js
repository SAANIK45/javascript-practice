//write three variable (N,S,B)

var number = 45;
var name = 'Samiul Ahmed Anik';
var isHot = true;

//2 variables (let,const)

const pi = 3.1416;
let grade = 'A+';
grade = 'A';
console.log(grade);

//simple math operations

let numOne = 20;
let numTwo = 12;
//modulus
let result = numOne % numTwo;
console.log(result);

//compare two variable
let firstNum = 5;
let secondNum = 10;

if(firstNum != secondNum) {
    console.log('not equal');
}
else{
    console.log('equal');
}

//while loop 7 to 19 display odd 

let num = 7;
while(num <= 19){
    if(num%2==!0){
        console.log(num);
    }
    num++;
}


//array 

let friends = ['salam','kalam','balam','palam'];
friends[1] = 'chalam';
friends.push('Anik');
friends.pop();
for (let i = 0 ; i < friends.length ;i++){
    let here = friends[i];
    if(here == 'balam'){
        console.log('balam here');
    }
}


//array find bigger number 

let numbers = [23,24,55,87,45,99,232,543];

for (let i = 0 ; i < numbers.length ; i++){
    let element  = numbers[i];
    if(element > 80){
        console.log(element);
    }
}

// function

function multiply(a,b,c) {
    let total  = a * b * c;
    return total;    
}
let res = multiply(2,3,3);
console.log(res);

//Object

let phone = {
    name : 'samsung',
    price : 23000,
    camera : 16
};
phone.price = 26000; 
console.log(phone);

