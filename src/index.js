'use strict'

const fs = require('fs')
const path = require('path')
require('colors')

exports.it = (description, fn) => {
  console.log(` ${'▶︎'.green} ${description}`)
  fn()
}

exports.true = bool => {
  if (!bool) {
    throw new Error('not true')
  }
}

exports.throws = fn => {
  let throws = false
  try {
    fn()
  } catch (err) {
    throws = true
  }
  if (!throws) {
    throw new Error('Function does not throw')
  }
}

const testFiles = process.argv.slice(2).map(file => {
  return path.resolve(file)
})

let failed = false

testFiles.forEach(file => {
  try {
    require(file)
  } catch (err) {
    console.log(` ${'▶︎'.red} Error in ${file}`)
    console.log(err.message.red)
    failed = true
  }
})

if (failed) {
  process.exit(1)
}
