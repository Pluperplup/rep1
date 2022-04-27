// EcmaScript
function sampleFunc(param1, shift = 0) { // Shift have default value. Default values last in row
    // if(shift === undefined) shift = 0;
    const num = Math.round(Math.random() * param1) + shift;
    console.log(num);
}

// sampleFunc(100, 10);
// sampleFunc(100, 1000);

function sum(prefix, ...incomeNums) {
    res = 0;
    for(let cnt = 0; cnt < incomeNums.length; cnt++) {
        res += incomeNums[cnt];
    }
    return `${prefix}: ${res}`;
}

const s = sum('Сумма чисел', 1, 67, 45, 9, 13, 45, 0, 62);
console.log(s);