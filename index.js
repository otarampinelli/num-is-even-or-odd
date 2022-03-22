'use strict'

module.exports = function evenOrOdd(value) {
    const number = Math.abs(parseInt(value))

    if (isNaN(number)) {
        throw new Error('Expected a number')
    }

    const result = number % 2 === 0 ? true : false

    return result
}