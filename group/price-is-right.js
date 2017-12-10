'use strict'

/*
 * Price is right
 * 1 can of soup is 650 FCFA
 * 3 can of soup is 1500 FCFA
 * 1 can of soup contains 500 ml
 *
 * Create a function `getCostCount` that takes a number of cans
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 *
 * Create a function `getCostMl` that takes a quantity in milliliters
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 */
const getCostCount = number => {
    let sum = 0

    if((number % 3) === 0){
        sum = ((number/3) * 1500)
    }

    else if(((number % 3) != 0) && (number > 3)){
        sum = (1500 * Math.floor(number/3)) + ((number % 3) * 650)
    }

    else{
        sum = number * 650
    }

    return sum
}


console.log(getCostCount(15))


const getCostMl = condition => {
    let sum = 0
    
    if((condition % 1500) === 0 ){
        sum = condition
    }
    
    else if(((condition % 1500) === 0) && (condition >= 1000)){
        sum = (1500 * Math.floor((((condition/500) - 1) / 3)))  + Math.floor(((condition % 500) + 1) * 650)
    }

    else if((((condition / 500) - 2) % 3) === 0){
      sum = (1500 * Math.floor((((condition/500) - 2) / 3)))  + Math.floor(((condition % 500) + 1) * 1300)
    }

    else{
        sum = condition + 150
    }
    
    return sum
}

console.log(getCostMl(7500))

// You must write your own tests
throw Error('No tests !')
