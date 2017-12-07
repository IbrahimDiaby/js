'use strict'

/*
 * Create a function `add` that takes 2 arguments and add them
 *
 * @notions Primitive and Operators, Functions
 * @next sub
 */

// Your code :
const rand1 = 2
const rand2 = 2 
const add = (rand1, rand2) => rand1 + rand2
console.log(add(2, 2))
//* Begin of tests
const assert = require('assert')
const rand = Math.random()

assert.strictEqual(typeof add, 'function')
assert.strictEqual(add.length, 2)
assert.strictEqual(add(2, 2), 4)
assert.strictEqual(add(rand, rand), rand + rand)
// End of tests */
