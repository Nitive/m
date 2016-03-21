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


const allTrue = (result, n) => result && n

exports.equal = function() {
  const args = [].slice.call(arguments)
  const argsEqual = args.map(x => x === args[0]).reduce(allTrue)
  const isNaNs = args.filter(x => x !== x).length === args.length
  if (!(argsEqual || isNaNs)) {
    throw new Error(`${args.join(', ')} are not equal`)
  }
}
