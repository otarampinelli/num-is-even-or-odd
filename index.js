'use strict'

module.exports = function evenOrOdd(value) {
    const number = Math.abs(value)

    if (Number(number) === number && number % 1 !== 0) {
        throw new Error('Number must be integer')
    }

    if (isNaN(number)) {
        throw new Error('Expected a number')
    }

    const result = number % 2 === 0 ? 'even' : 'odd'

    return result
}