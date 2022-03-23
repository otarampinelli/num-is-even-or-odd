/* eslint-disable no-undef */
const evenOrOdd = require('./index')

test('should insert a integer and return even', () => {
    expect(evenOrOdd(2)).toEqual('even')
})

test('should insert a integer and return odd', () => {
    expect(evenOrOdd(1)).toEqual('odd')
})

test('should insert a string and return even', () => {
    expect(evenOrOdd('2')).toEqual('even')
})

test('should insert a string and return odd', () => {
    expect(evenOrOdd('1')).toEqual('odd')
})

test('should return an error', () => {
    expect(() => {
        evenOrOdd('test')
    }).toThrow('Expected a number')
})