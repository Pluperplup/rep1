// function fName() {
// this...
//     return;
// }
// let funcName = function() {
//     return; 
// }

function GenArray(len, max = 1000) {
    let res = [];
    for (let count = 0; count < len; count++) {
        res.push(Math.round(Math.random() * max));
    }
    return res;
}

function compare(a, b) {
    return a - b;
}

let arr = GenArray(100, 700);
// arr.sort(compare);
// arr.sort(function compare(a, b) {
//     return a -b;
// });

console.log(arr);
// arr.sort( (a, b) => a - b);
function eachArray(item) {
    console.log(item);
}
// arr.forEach(eachArray);
// arr.forEach(item => console.log(item));
let upArr = arr.map(item => item + 100);
console.log(upArr);

