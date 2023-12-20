# num-is-even-or-odd [![NPM version](https://img.shields.io/npm/v/num-is-even-or-odd.svg?style=flat)](https://www.npmjs.com/package/num-is-even-or-odd) [![NPM monthly downloads](https://img.shields.io/npm/dm/num-is-even-or-odd.svg?style=flat)](https://npmjs.org/package/num-is-even-or-odd) [![NPM total downloads](https://img.shields.io/npm/dt/num-is-even-or-odd.svg?style=flat)](https://npmjs.org/package/num-is-even-or-odd)

> Return even or odd to as result to a given number.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install -D num-is-even-or-odd
```

## Usage
```js
import { evenOrOdd } from 'num-is-even-or-odd'

const { isEvenOrOdd, isEven, isOdd } = evenOrOdd()

// Method to verify even and odd

console.log(evenOrOdd(3)); //=> "odd"
console.log(evenOrOdd(4)); //=> "even"

// You can pass a "returnAsBool" boolean parameter to return results as boolean, true to even and false to odd, default value for parameter is false

console.log(evenOrOdd(3, true)); //=> false (odd)
console.log(evenOrOdd(4, true)); //=> true (even)

// Method to verify if the value is odd

console.log(isOdd(3)); //=> true
console.log(isOdd(4)); //=> false

// Method to verify if the value is even

console.log(isEven(3)); //=> false
console.log(isEven(4)); //=> true

```

### Author

**Otavio Rampinelli**

* [LinkedIn Profile](https://linkedin.com/in/otarampinelli)
* [GitHub Profile](https://github.com/otarampinelli)

### License

Copyright © 2023, [Otavio Rampinelli](https://github.com/otarampinelli).
Released under the [MIT License](LICENSE).

***
