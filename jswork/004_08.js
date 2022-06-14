let km = 1;
let foot = 0.305;

let d1 = 376.37,
    d2 = 1234;

let a = d1 * km;
let b = d2 * foot;

if ((a - b) > 0){
    console.log(`distance ${b}km smaller than distance ${a}km`); 
}else if((a - b) < 0) {
    console.log(`distance ${a}km smaller than distance ${b}km`);
} else {
    console.log(`distance ${a}km equal distance ${b}km`);
}