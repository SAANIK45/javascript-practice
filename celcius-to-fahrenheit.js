//Celsius to fahrenheit

function celsiusTofahren(celsius){
    
    let input = celsius;
    let fahren = input * 9/5;
    fahren = fahren + 32;
    return fahren;
}
let celsiusInput = 4;
let result = celsiusTofahren(celsiusInput);
console.log(result);


//Fahrenheit to celsius

function fahrenToCelsius(fahren){

    let input  = fahren;
    let celsius = input-32;
    celsius = celsius * 5;
    celsius = celsius/9;
    return celsius; 
}
let fahrenInput = 50;
let result = fahrenToCelsius(fahrenInput);
console.log(result);