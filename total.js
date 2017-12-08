'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 * @next multiply
 */
const total = array => {
    let count = 0
    let number = array.length
    let result = 0
    for(count = 0; count < number; count++){
        result = result + array[count]
    }
    return result

}
console.log(total([1, 1, 1]));
console.log(total([10, 10, 10]));
console.log(total([24, -10, 10, 0, 0 , 100]));
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
