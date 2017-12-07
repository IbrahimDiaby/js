'use strict'

/*
 * Create a function `sub` that takes 2 arguments and substract them
 *
 * @notions Primitive and Operators, Functions
 * @next abs
 */

// Your code :

const sub = (n1, n2) => n1 - n2

console.log(sub(2, 2))
console.log(sub(-2 , 2))
console.log(sub.length)
//* Begin of tests
const assert = require('assert')
const rand = Math.random()

assert.strictEqual(typeof sub, 'function')
assert.strictEqual(sub.length, 2)
assert.strictEqual(sub(2, 2), 0)
assert.strictEqual(sub(-2, 2), -4)
assert.strictEqual(sub(rand, rand), rand - rand)
// End of tests */
