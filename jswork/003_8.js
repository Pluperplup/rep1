let X = false,
  Y = true,
  Z = false;

let expression_1 = (X && !(Z || Y)) || !Z; //true
let expression_2 = !X || (X && (Y || Z)); //true
let expression_3 = (X || (Y && !Z)) && Z; //false

console.log(expression_1);
console.log(expression_2);
console.log(expression_3);
