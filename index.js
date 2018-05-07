'use strict'

let ToString = arr => ({}).toString.call(arr)

let isArray = arr => ToString(arr) === '[object Array]'

let isObject = obj => obj != null && typeof obj === 'object' && !isArray (obj) && ToString(obj) === '[object Object]'

let isNegativeZero = num => num === 0 && (1 / num < 0)

let isArguments = arr => ToString(arr) === '[object Arguments]'

let isNumber = num => typeof num === 'number'

let isBoolean = bool => typeof bool === 'boolean'

let isNoop = noop => noop === null || noop === undefined

let isString = str => typeof str === 'string'

let isPrimitiveType = val => isNumber(val) || isString(val) || isBoolean(val) || isNoop(val)

function equals(arr1, arr2, strict) {
  strict = strict || false
  // if arr is a falsy value, return fasle
  if (!arr1 || !arr2) return false

  // if the strict is not opened and arr is arguments(like-Array), converts the like-Array to Array
  if (strict) {
    if (isArguments(arr1)) {
      arr1 = [].slice.call(arr1)
    }
    if (isArguments(arr2)) {
      arr2 = [].slice.call(arr2)
    }
  }

  // if arr is not Array, return false
  if (!isArray(arr1) || !isArray(arr2)) return false

  let [arr1Len, arr2Len] = [arr1.length, arr2.length]

  // compare lengths equals
  if (arr1Len !== arr2Len) return false

  while (arr1Len--) {
    let [val1, val2] = [arr1[arr1Len], arr2[arr1Len]]

    // if value's type is Number and String and Boolean and Null and Undefined
    if (isPrimitiveType(val1)) {
      //Judge val2 type
      if (!isPrimitiveType(val2)) return false

      // Judge positive and negative Zero
      if (isNegativeZero(val1) !== isNegativeZero(val2)) return false

      if (val1 !== val2) return false

    } else if (isArray(val1)) {  // if value is Array
      //Judge val2 type
      if (!isArray(val2)) return false

      // recurse judge
      if (!equals(val1, val2, strict)) return false
      
    } else if (isObject(val1)) {  // if value is Object
      //Judge val2 type
      if (!isObject(val2)) return false

      let keys = Object.keys(val1)
      let i = keys.length

      // judge whether key numbers is equal
      if (i !== Object.keys(val2).length) return false

      while (i--) {
        let key = keys[i]

        //  Judge whether there is a key in val2
        if (!({}).hasOwnProperty.call(val2, key)) return false

        // recurse judge
        if (!equals([val1[key]], [val2[key]], strict)) return false
      }
    }
  }
  return true
}

module.exports = equals
