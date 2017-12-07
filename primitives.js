'use strict'

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef`
 *
 * @notions Primitive and Operators, Variables
 * @next escape-str
 */

// Your code :
  const str = '1337'
   console.log(str)
  const num = 42
   console.log(num)
  const bool = false
   console.log(bool)
  const undef = undefined
   console.log(undef)

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof str, 'string')
assert.strictEqual(str, '1337')

assert.strictEqual(typeof num, 'number')
assert.strictEqual(num, 42)

assert.strictEqual(typeof bool, 'boolean')
assert.strictEqual(bool, false)

assert.strictEqual(typeof undef, 'undefined')
assert.strictEqual(undef, undefined)
// End of tests */
