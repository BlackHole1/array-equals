# Array-equals

[![Node Version](https://img.shields.io/badge/node.js-%3E=_6-green.svg)](https://travis-ci.org/BlackHole1/array-equals)
[![Build Status](https://travis-ci.org/BlackHole1/array-equals.svg?branch=master)](https://travis-ci.org/BlackHole1/array-equals)
[![Coverage Status](https://coveralls.io/repos/github/BlackHole1/array-equals/badge.svg?branch=master)](https://coveralls.io/github/BlackHole1/array-equals?branch=master)
[![Npm Downlaod](https://img.shields.io/npm/dy/@black_hole/array-equals.svg)](https://www.npmjs.com/package/array-equals)

## install

``` bash
# Install with npm
$ npm install @black_hole/array-equals --save

# Install with yarn
$ yarn add @black_hole/array-equals
```

## Usage

Two arrays are equal
```javascript
let arrEquals = require('@black_hole/array-equals')

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
let result = arrEquals(arr1, arr2) // => true
```

Two arrays are not equal
```javascript
let arrEquals = require('@black_hole/array-equals')

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 4]
let result = arrEquals(arr1, arr2) // => false
```

Arrays of different lengths are not equal
```javascript
let arrEquals = require('@black_hole/array-equals')

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3, 4]
let result = arrEquals(arr1, arr2) // => false
```

Multidimensional array are equal
```javascript
let arrEquals = require('@black_hole/array-equals')

let arr1 = [1, 2, 3, [4, 5, 6]]
let arr2 = [1, 2, 3, [4, 5, 6]]
let result = arrEquals(arr1, arr2) // => true
```

Arguments(like-Array) are equal
```javascript
let arrEquals = require('@black_hole/array-equals')

function likeArr () {
    let arr2 = [1, 2, 3]
    return arrEquals(arguments, arr2, true)
}
likeArr(1, 2, 3) // => true
```

Depth judgment
```javascript
let arrEquals = require('@black_hole/array-equals')

let arr1 = [1, {
    'a': 1,
    'b': ['x', null, -0]
}]
let arr2 = [1, {
    'a': 1,
    'b': ['x', null, 0]
}]
let result = arrEquals(arr1, arr2) // => false
```

## Contributing

| **Commits** | **Contributor** | 
| --- | --- |
| 5 | [Black-Hole](https://github.com/BlackHole1) |

## Author

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)