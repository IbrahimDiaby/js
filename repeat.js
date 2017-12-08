'use strict'

/*
 * Create a function `repeat` that takes a String and a Number
 * and return the repeated string by the given number
 * Like the method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * Of course you may not use the method directly
 *
 * @next sentence
 */

// your code
const repeat = (noun, number) => {
    let count = 0
    let concat = noun
    let concatT = ''
    concatT = concat + concatT
    
    while((count + 1) < number)
    {
      if(count < number){
        concat = concat + concatT
        count++
      }
    }
    
    if((count === 0) && (number === 0)){
          concat = ''
       }
    return concat
  }
  
  console.log(repeat.length)
  console.log(repeat('a', 3))
  console.log(repeat('ba', 10))
  console.log(repeat('pouet', 2))
  console.log(repeat('haha', 1))
  console.log(repeat('hehehe', 0))
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof repeat, 'function')
assert.strictEqual(repeat.length, 2)
assert.strictEqual(repeat.toString().includes('.repeat'), false)
assert.strictEqual(repeat('a', 3), 'aaa')
assert.strictEqual(repeat('ba', 10), 'babababababababababa')
assert.strictEqual(repeat('pouet', 2), 'pouetpouet')
assert.strictEqual(repeat('haha', 1), 'haha')
assert.strictEqual(repeat('hehehe', 0), '')
// End of tests */
