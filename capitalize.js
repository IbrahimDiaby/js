'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

// your code
const capitalize = string => string.toUpperCase(string)

console.log(capitalize('Je vais bien'))
console.log(capitalize('futur programmeur de première classe'))

// You must write your own tests
// throw Error('No tests !')

const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize.length, 1)
assert.strictEqual(capitalize('futur programmeur de première classe'), 'FUTUR PROGRAMMEUR DE PREMIÈRE CLASSE')
assert.strictEqual(capitalize.toString().includes('string.toUpperCase'), true)