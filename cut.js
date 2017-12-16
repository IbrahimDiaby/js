'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

// your code

/* let string = 'Maman';
const strings = string.split(' ');
let longueur = string.length; */

const cutFirst = string => {
    let arrayString = new String(string);
    let count = 0;
    let chaine = '';
    for(count = 0; count < Math.abs(2 - arrayString.length); count++){
        chaine = chaine + console.log(arrayString[count]);
    }
    return chaine; 
}

const cutLast = string => {
    let arrayString = new String(string);
    let count = 2;
    let chaine = '';
    for(count = 2; count < arrayString.length; count++){
        chaine = chaine + console.log(arrayString[count]);
    }
    return chaine; 
}

const cutFirstLast = string => {
    let arrayString = new String(string);
    let count = 2;
    let chaine = '';
    for(count = 2; count < Math.abs(2 - arrayString.length); count++){
        chaine = chaine + console.log(arrayString[count]);
    }
    return chaine; 
}

console.log('Pour CutFirst');
cutFirst('Merveilleux');
console.log('Pour CutLast');
cutLast('Merveilleux');
console.log('Pour CutFirstLast');
cutFirstLast('Merveilleux');

/* {
  let count = 0;
  // strings = strings.split('');
  for(count = 0; count < ((strings.length) - 2); count++){
      //console.log(strings['count']);
      console.log(strings['count']); // strings['count'];
  }
      return console.log(strings['count']);
}*/
// You must write your own tests
// throw Error('No tests !')


