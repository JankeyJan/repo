'use strict';

if (4 == 9) {
    console.log('ok');
} else {
    console.log('error');
}

// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100){
//     console.log('many');
// } else {
//     console.log('ok');
// }


//(num == 50) ? console.log('ok') : console.log('error');

const num = 50;
switch (num) {
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 55:
        console.log('yes');
        break;    
    default:
        console.log('oops');
        break;
}