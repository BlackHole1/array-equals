let arrEquals = require('./')
const assert = require('assert')
const mocha = require('mocha')
const {describe, it} = mocha
describe('One dimensional array', () => {
  it('Two arrays are equal', () => {
    let arr1 = [1, 2, 3]
    let arr2 = [1, 2, 3]
    let result = arrEquals(arr1, arr2)
    assert.equal(result, true)
  })
  it('Two arrays are not equal', () => {
    let arr1 = [1, 2, 3]
    let arr2 = [1, 2, 4]
    let result = arrEquals(arr1, arr2)
    assert.equal(result, false)
  })
  it('Arrays of different lengths are not equal', () => {
    let arr1 = [1, 2, 3]
    let arr2 = [1, 2, 3, 4]
    let result = arrEquals(arr1, arr2)
    assert.equal(result, false)
  })
})
describe('Multidimensional array', () => {
  it('Two arrays are equal', () => {
    let arr1 = [1, 2, 3, [4, 5, 6]]
    let arr2 = [1, 2, 3, [4, 5, 6]]
    let result = arrEquals(arr1, arr2)
    assert.equal(result, true)
  })
  it('Two arrays are not equal', () => {
    let arr1 = [1, 2, 3, [4, 5, 6]]
    let arr2 = [1, 2, 4, [7, 8, 9]]
    let result = arrEquals(arr1, arr2)
    assert.equal(result, false)
  })
})

describe('Arguments(like-Array)', () => {
  it('Two arrays are equal', () => {
    function likeArr () {
      let arr2 = [1, 2, 3]
      return arrEquals(arguments, arr2, true)
    }
    let result = likeArr(1, 2, 3)
    assert.equal(result, true)
  })
  it('Two arrays are not equal', () => {
    function likeArr () {
      let arr2 = [1, 2, 3]
      return arrEquals(arguments, arr2, true)
    }
    let result = likeArr(1, 2, 4)
    assert.equal(result, false)
  })
})

describe('Unforeseen circumstances', () => {
  it('There are no second parameters', () => {
    let arr1 = '123'
    let result = arrEquals(arr1)
    assert.equal(result, false)
  })
  it('first parameter not is Array', () => {
    let arr1 = '123'
    let arr2 = [1, 2, 3]
    let result = arrEquals(arr1, arr2)
    assert.equal(result, false)
  })
})