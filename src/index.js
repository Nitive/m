'use strict'

const fs = require('fs')
const path = require('path')
require('colors')

exports.it = (description, fn) => {
  console.log(` ${'▶︎'.green} ${description}`)
  fn()
}

exports.assertTrue = bool => {
  if (!bool) {
    throw new Error('not true')
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
