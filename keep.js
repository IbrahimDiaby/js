'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */

// your code

const keepFirst = string => {
    let arrayString = new String(string);
    let count = 0;
    let chaine = '';
    for(count = 0; count < 2; count++){
        chaine = chaine + console.log(arrayString[count]);
    }
    return chaine; 
}

const keepLast = string => {
    let arrayString = new String(string);
    let count = undefined;
    let chaine = '';
    for(count = Math.abs(2 - arrayString.length); count < arrayString.length; count++){
        chaine = chaine + console.log(arrayString[count]);
    }
    return chaine; 
}

const keepFirstLast = string => {
    let arrayString = new String(string);
    let count = 2;
    let chaine = '';
    for(count = 2; count < 3; count++){
        chaine = chaine + console.log(arrayString[count]);
    }
    return chaine; 
}
console.log('Pour KeepFirst');
keepFirst('Belle');
console.log('Pour KeepLast');
keepLast('Belle');
console.log('Pour KeepFirstLast');
keepFirstLast('Belle');
// You must write your own tests
//throw Error('No tests !')
