'use strict'

/*
 * Create the function `sameSign` that takes 2 numbers arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 * @next repeat
 */

// Your code :

const sameSign = (a, b) => {
    if((a * b) > 0){
        return true
    }

    else if((a === 0) && (b === 0)){
        return true
    }

    else{
        return false
    }
}

console.log(sameSign.length)
console.log(sameSign(-2, -1))
console.log(sameSign(0, 0))
console.log(sameSign(12, 3232))
console.log(sameSign(1, -1))
console.log(sameSign(-231, 1))
console.log(sameSign(-231, 0))
console.log(sameSign(0, 231))
console.log(sameSign(231, -233))
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sameSign, 'function')
assert.strictEqual(sameSign.length, 2)
assert.notStrictEqual(sameSign, Math.sameSign)
assert.strictEqual(sameSign(-2, -1), true)
assert.strictEqual(sameSign(0, 0), true)
assert.strictEqual(sameSign(12, 3232), true)
assert.strictEqual(sameSign(1, -1), false)
assert.strictEqual(sameSign(-231, 1), false)
assert.strictEqual(sameSign(-231, 0), false)
assert.strictEqual(sameSign(0, 231), false)
assert.strictEqual(sameSign(231, -233), false)
// End of tests */
