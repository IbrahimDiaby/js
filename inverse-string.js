'use strict'
/* Create a function who takes a string and return inverse string Examples: 'Salut' return 'tulas'*/
const inverse_String = string => {
    let count = 0;
    for(count=0; count < string.length; count++){
        console.log(string[(string.length - 1) - count]);
    }
}

inverse_String('ellebaL');