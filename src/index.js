'use strict'

const fs = require('fs')
const path = require('path')
require('colors')


const testFiles = process.argv.slice(2).map(file => {
  return path.resolve(file)
})


const successReporter = description => {
  console.log(` ${'→'.green} ${description}`)
}

const errorReporter = (description, err) => {
  console.log(` ${'←'.red} ${description}`)
  console.log(`${err.message.red} in ${file.magenta}`)
  console.log(err.stack.gray)
}

let failed = false

let file;

exports.it = (description, fn) => {
  try {
    fn()
    successReporter(description)
  } catch (err) {
    failed = true
    errorReporter(description, err)
  }
}



const assertions = require('./assertions')
module.exports = Object.assign(assertions, exports)


testFiles.forEach(f => {
  file = f
  require(f)
})

if (failed) {
  process.exit(1)
}
