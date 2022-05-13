let A = true,
B = false,
C = false;

let expression_1 = !A && B;//a

let expression_2 = A || !B;//b

let expression_3 = A && B || C;//v

console.log(`expression 1: ${expression_1}, expression 2: ${expression_2}, expression 3: ${expression_3}`)