'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 * @next
 */

// Your code :

const multiply = (a, b) => {
  if(b === 0){
      return 0
  }
  if (b > 0){
      return(a + multiply(a, b - 1))
  }
  if (b < 0){
     return -multiply(a, -b)
  }
}
//   return resultat

console.log(multiply.length)
console.log(multiply(34, 78))
console.log(multiply(123, 0))
console.log(multiply(0, -230))
console.log(multiply(0, 0))
console.log(multiply(123, -22))
console.log(multiply(-22, 123))
console.log(multiply(-22, -123))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
