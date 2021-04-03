const {doSomething} = require('./renameme')

describe('number converter', () => {
  xit('Should convert 1 to one', () => {
    expect(doSomething(1)).toBe(0);
  });
});