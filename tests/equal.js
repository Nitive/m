const m = require('../src')

m.it('m.equal should pass if arguments are equal', () => {
  m.equal(1, 1)
  m.equal(1, 1, 1)
  m.equal('str', 'str')
  m.equal(null, null)
  m.equal(undefined, undefined)
  m.equal(NaN, NaN)
})

m.it('m.equal should throw error if arguments are not equal', () => {
  m.throws(() => m.equal(1, 2))
  m.throws(() => m.equal(1, 1, 3))
  m.throws(() => m.equal('str', 'str1'))
  m.throws(() => m.equal(null, undefined))
  m.throws(() => m.equal(undefined, 1))
  m.throws(() => m.equal(NaN, 'str'))
})
