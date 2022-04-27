let a = [];
for (let b = 0; b <= 50000000; b++) {
  a.push(b);
}

const start1 = new Date().getTime();
let c = a.slice();
const end1 = new Date().getTime();
console.log(`${end1 - start1}ms`);

const start2 = new Date().getTime();
let d = [...a];
const end2 = new Date().getTime();
console.log(`${end2 - start2}ms`);

const start3 = new Date().getTime();
for (let b = 0; b <= 50000000; b++) {
    a.push(b);
  }
const end3 = new Date().getTime();
console.log(`${end3 - start3}ms`);