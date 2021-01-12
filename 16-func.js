"use strict";

let pum = 20;

function showFirstMassage(text, arg, num){
    console.log(text);
    let pum = 10;
    console.log(pum);
}

showFirstMassage('Text');

console.log(pum);

////////////////////////////////

function calc(a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 2));

///////////////////////////////
const anotherNum = ret();
console.log(anotherNum);


function ret(){
    let num = 50;
    return num;
}

// const anotherNum = ret();
// console.log(anotherNum);

///////////////////////////////

const logger = function(){
    console.log("Hi");
};

logger();

const calc2 = (a, b) => a + b;