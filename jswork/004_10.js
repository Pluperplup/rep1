let a = 2,
    r = 5;

let S1 = a ** 2;
let S2 = 3.14 * r ** 2;

if ((S1 - S2) > 0){
    console.log(`${S1} bigger than ${S2}`);
}else if((S1 - S2) < 0) {
    console.log(`${S2} bigger than ${S1}`);
} else {
    console.log(`${S1} equal ${S2}`);
}