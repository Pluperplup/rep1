//e
let y1 = 0;
let e = Math.cos(y1) * 5;
console.log(e);

//m
let x = 4
 ,y = 81;
let m1 = -5 * (x ** (1 / 2) + y ** (1/4));
let m = -5 * (Math.sqrt(x) + sqrt_4(y)) ;
console.log(m1 , m);

function sqrt_4 (number){
    return Math.sqrt(Math.sqrt(number));
}