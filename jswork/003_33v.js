let x, y;

if (x == undefined) {
  x = Infinity;
}
if (y == undefined) {
  y = Infinity;
}

if (y >= 1) {
  console.log(`точка А (${x}; ${y}) принадлежит графику`);
} else if (y <= -3 && y >= -4) {
  console.log(`точка А (${x}; ${y}) принадлежит графику`);
} else {
  console.log(`точка А (${x}; ${y}) не принадлежит графику`);
}
