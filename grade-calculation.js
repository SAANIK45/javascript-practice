//Grade calculation

function gradeCalculation(number){
    let input = number;
    if(number > 100){
        console.log('please enter valid input.');
    }
    else if(number>= 80){
        console.log('you got A+');
    }
    else if(number>=70) {
        console.log('you got A');
    }
    else if(number>=60){
        console.log('you got A-');
    }
    else if(number>= 50){
        console.log('you got B+');
    }
    else if(number>= 40){
        console.log('you got B');
    }
    else if(number>= 35){
        console.log('you got B-');
    }
    else if(number>=33){
        console.log('you are passed');
    }
    else if(number < 33){
        console.log('you are failed');
    }
}
 
let inputGrade = 11;
let result = gradeCalculation(inputGrade);