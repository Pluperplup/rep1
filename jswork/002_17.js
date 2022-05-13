let a = random(),
b = random(), 
c = random();
let newArray = [a,b,c];
let newArraychanges = [a,c,b];

function random() {
  return Math.round(Math.random() * 8 + 1);
}

console.log(`before changes: ${newArray.join("")}`)
console.log(`after changes: ${newArraychanges.join("")}`)