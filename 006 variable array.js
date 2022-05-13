let x = new Array(5); // x[3] = undefined

let a = [1, 6, 876, 86756, 654]; // index start from 0.
console.log(a[0]); // 1
console.log(a[3]); // 86756
console.log(a[7 - 5]); // 876

let b = [56, true, "Str", 56 - 10, a, Math.round];

let c = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33],
];
console.log(c[1][2]); // 23

let d1 = [11];
let d2 = [21, 22];
let d3 = [31, 32, 33];
let d = [d1, d2, d3];

let s = new Set();
s.add("v1");
s.add("v2");
s.add("v1");
