//String reverse 

const greetings = 'hello how are you';

function reverseString(text) {
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}

let result = reverseString(greetings);
console.log(result);