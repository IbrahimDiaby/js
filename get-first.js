'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 * @next get-last
 */

// Your code :
const getFirst = nom => nom[nom.length - nom.length]
console.log('La première lettre de la chaine de caractère de la phrase est : ')
console.log(getFirst('Dieu'))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
