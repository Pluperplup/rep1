const R = 6350;
function HorizonDistance(h) {
  return (Math.round(Math.sqrt(h * (2 * R + h))));
}

console.log(`${HorizonDistance()} metres`);
