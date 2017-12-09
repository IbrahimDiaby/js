'use strict'

/*
 * Create a function `words` that take a string
 * and return an array of each words using space as a delimiter
 *
 * @next total
 */

// your code
// const words = string => {
    const words = string =>{ 
        const result =  string.split(' ')

        return result
}
    // let number = words.length
    // let letter = ' '
    // let count = 0
    // let charsletter = ''
    
    // while (count < number){
    //     letter = words[Math.abs(count - words.length)]
    //     charsletter = charsletter + letter
    //     count++
    //     return [charsletter]
    // }
    
//}

console.log(words('a b c'))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
// const repeat = (noun, number) => {
//     let count = 0
//     let concat = noun
//     let concatT = ''
//     concatT = concat + concatT
    
//     while((count + 1) < number)
//     {
//       if(count < number){
//         concat = concat + concatT
//         count++
//       }
//     }
    
//     if((count === 0) && (number === 0)){
//           concat = ''
//        }
//     return concat
//   }

//   console.log(repeat.length)
//   console.log(repeat('a', 3))
//   console.log(repeat('ba', 10))
//   console.log(repeat('pouet', 2))
//   console.log(repeat('haha', 1))
//   console.log(repeat('hehehe', 0))