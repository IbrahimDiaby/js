'use strict'

/*
 * Create a function `sentence` that takes an array of strings
 * and return a strings of all the element separated by spaces
 *
 * @next words
 */
// your code
const sentence = array => {
    let count = 0
    let charletter = ' '
    let number = array.length
    let chartext = ''
    while(count < number){
            let letter = array[count]
            chartext = letter 
            count++
            while(count < number){
                letter = array[count]
                chartext = chartext + ' ' + letter
                count++
            }
        return chartext
        
    }
}
console.log(sentence.length)
console.log(sentence(['a', 'b', 'c']))
console.log(sentence(['a', '1', 'c']))
console.log(sentence(['a', '1', 'c', 'd', 'e', 'f']))
console.log(sentence(['a', 'b', 'c']))
console.log(sentence([ 'wol.lol', 'lo,lol']))
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sentence, 'function')
assert.strictEqual(sentence.length, 1)
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f')
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol']), 'wol.lol lo,lol')
// End of tests */
