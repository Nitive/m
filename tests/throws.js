'use strict'

const m = require('../src/')

m.it('m.throws should pass test if function throws error', () => {
  m.throws(() => {
    throw new Error()
  })
})

m.it('m.throws should not pass test if function does not throw error', () => {
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
