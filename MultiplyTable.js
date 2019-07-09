'use strict';

function getMultiplyTable(var number1,var number2) {
    var result = new String("");
    if(number1 < number2){
        return result="error";
    }
    if(number1<=0 || number1 >= 1000 number1<=0 || number1 >= 1000){
        return result="error";
    }
    for(let i = number1;i <= number2;i++){
        for(let j = number1;j <= i;j++){
            result.concat(j'*'i=i*j)
        }
        return result;
    }

}
