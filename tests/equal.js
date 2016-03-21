const m = require('../src')

m.it('m.equal passes if arguments are equal', () => {
  m.equal(1, 1)
})

m.it('m.equal passes with few numbers', () => {
  m.equal(1, 1, 1)
})

m.it('m.equal passes with strings', () => {
  m.equal('str', 'str')
})

m.it('m.equal passes with few strings', () => {
  m.equal('str', 'str', 'str', 'str', 'str')
})

m.it('m.equal passes with nulls', () => {
  m.equal(null, null)
})

m.it('m.equal passes with undefined', () => {
  m.equal(undefined, undefined)
})

m.it('m.equal passes with NaN', () => {
  m.equal(NaN, NaN)
})

m.it('m.equal passes with few NaN', () => {
  m.equal(NaN, NaN, NaN)
})

m.it('m.equal faild if arguments are not equal', () => {
  m.throws(() => m.equal(1, 2))
})

m.it('m.equal fails with few arguments', () => {
  m.throws(() => m.equal(1, 1, 3))
})

m.it('m.equal fails with few strings', () => {
  m.throws(() => m.equal('str', 'str1'))
})

m.it('m.equal fails with few null and undefined', () => {
  m.throws(() => m.equal(null, undefined))
})

m.it('m.equal fails with few undefined and 1', () => {
  m.throws(() => m.equal(undefined, 1))
})

m.it('m.equal fails with few NaN and string', () => {
  m.throws(() => m.equal(NaN, 'str'))
})

m.it('m.equal faild with diffrent references', () => {
  m.throws(() => m.equal({}, {}))
})
