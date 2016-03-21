const m = require('../src/')

m.it('m.true should pass if got true', () => {
  m.true(true)
})

m.it('m.true should fail if got false', () => {
  m.throws(() => {
    m.true(false)
  })
})
