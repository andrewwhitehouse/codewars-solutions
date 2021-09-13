const {numberOfRectangles} = require('./numberOfRectangles')

describe('number of rectangles', () => {
  it('example 1', () => {
    expect(numberOfRectangles(3, 2)).toBe(18);
  });
  it('example 2', () => {
    expect(numberOfRectangles(4, 4)).toBe(100);
  });
  it('example 3', () => {
    expect(numberOfRectangles(5, 5)).toBe(225);
  });
  it('example 4', () => {
    expect(numberOfRectangles(1183, 1155)).toBe(467537310240);
  });
});

/*
// See https://www.youtube.com/watch?v=fueMfo3m4_8
function numberOfRectangles(m, n) {
  return (m * (m + 1) * n * (n + 1)) / 4;
}
 */