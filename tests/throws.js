'use strict'

const m = require('../src/')

m.it('m.throws', () => {
  m.throws(() => {
    throw new Error()
  })

  let throws = false
  try {
    m.throws(() => {}) // should throw Error
  } catch (err) {
    throws = true
  }
  if (!throws) {
    throw new Error('m.throw does not work!')
  }
})
