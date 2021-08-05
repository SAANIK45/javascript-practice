
const myNum = 23.444333;

//Math ceil

let result = Math.ceil(myNum);
console.log(result);

//Math floor

let result = Math.floor(myNum);
console.log(result);

//Math operation absolute

let result = Math.abs(myNum);

//Math operation random and round

let result = Math.random() * 10; 
result = Math.round(result); 
console.log(result);

//Random number with loop

for(let i = 0 ; i < 50 ;i++){
    let result = Math.random() * 10; 
    result = Math.round(result); 
    console.log(result); 
}