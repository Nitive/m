const m = require('../src/')

m.it('m.true', () => {
  m.true(true)
  m.throws(() => {
    m.true(false) // should throw error
  })
})
