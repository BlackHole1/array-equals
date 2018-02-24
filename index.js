'use strict'

function arrayToString (arr) {
  return ({}).toString.call(arr)
}

function isArray (arr) {
  return arrayToString(arr) === '[object Array]'
}

function isArguments (arr) {
  return arrayToString(arr) === '[object Arguments]'
}

function equals(arr1, arr2, strict) {
  strict = strict || false
  // if arr is a falsy value, return fasle
  if (!arr1 || !arr2) {
    return false
  }

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
  if (!isArray(arr1) || !isArray(arr2)) {
    return false
  }

  // compare lengths equals
  if (arr1.length !== arr2.length) {
    return false
  }

  for(var i = 0; i < arr1.length; i++) {
    // if value is Array
    if (isArray(arr1[i])) {
      // recurse judge
      if (!equals(arr1[i], arr2[i], strict)) {
        return false
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
  }
  return true
}

module.exports = equals
