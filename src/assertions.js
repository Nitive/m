'use strict'

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
