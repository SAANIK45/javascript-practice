function removeDuplicate(input) {
    let unique = [];
    /* for(let i=0 ; i < input.length; i++){
        let element = input[i];
        console.log(element);
    } */
    //for of
    for(const element of input){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
let inputArr = [11,44,32,53,12,45,12,65,123,65,12,14];
let result = removeDuplicate(inputArr);
console.log(result);
