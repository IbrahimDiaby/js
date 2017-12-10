'use strict'

/*
 * Create function `fizzBuzz` that print numbers from 1 to 100
 * But for multiples of three, print "Fizz” instead of the number
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * use console.log to print
 *
 * Français:
 * Créer la fonction `FizzBuzz` qui affiche les nombres de 1 à 100
 * Mais pour les multiples de trois, affiche "Fizz" à la place du nombre
 * et pour les multiples de cinq, affiche "Buzz".
 * Pour les nombres qui sont des multiples de trois et de cinq, affiche "FizzBuzz".
 *
 * Utilisez console.log pour afficher.
 */
// your code

const fizzBuzz = number => {
  let result = undefined
  let count = 1
  
  for(count = 1; count <= 100; count++){
     // result = console.log(count)
     
     if(((count % 3 ) === 0) && ((count % 5 ) === 0)){
          result = console.log('FizzBuzz')
     }
     
     else if((count > 1) && ((count % 3) === 0)){
        result = console.log('Fizz')
     }
     
     else if(((count % 5 ) === 0) && !((count % 3 ) === 0)){
          result = console.log('Buzz')
     }
     
     else{
        result = console.log(count)
     }
     
  }
  return result
}

fizzBuzz(1)

// You must write your own tests

//throw Error('No tests !')

const assert = require('assert')

assert.strictEqual(typeof fizzBuzz, 'function')
assert.strictEqual(fizzBuzz.length, 1)
assert.strictEqual(fizzBuzz(1), 1)
assert.strictEqual(fizzBuzz(2), 2)
assert.strictEqual(fizzBuzz(3), 'Fizz')
assert.strictEqual(fizzBuzz(4), 4)
assert.strictEqual(fizzBuzz(5), 'Buzz')
assert.strictEqual(fizzBuzz(15), 'FizzBuzz')
