'use strict'

/*
 * Create a get function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 * @next add
 */

// Provided code :
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
  noexist: undefined,
}

// Your code :

const get = key => sourceObject[key]

console.log(get('num'))
console.log(get('bool'))
console.log(get('str'))
console.log(get('log'))
console.log(get('noexist'))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests */
