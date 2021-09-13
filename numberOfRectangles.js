function numberOfRectangles(columns, rows) {
  let total = 0;
  for(let row=1; row <= rows; row++) {
    for(let col=1; col <= columns; col++) {
      total += row*col;
    }
  }
  return total;
}

module.exports = {numberOfRectangles};