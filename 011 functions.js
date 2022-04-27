let str1 = "Word1",
    str2 = "word2",
    str3 = "Hi!"

function getCurrTime() {
    let now = new Date();
    console.log(now.toTimeString());
}

function alertCompare(num1, num2) {
    if(num1 > num2) {
        console.log("Num1 > Num2");
        return;
    } else if(num1 < num2) {
        console.log("Num1 < Num2");
        return;
    }
    console.log("Num1 == Num2");
}

function sum2strings(str1, str2) {
    let res = str1 + str2 + str3;
    return res;
}

// function declaration as Variable
let someFunction = function() {
    console.log("someFunction called!");
}
someFunction();

console.log(getCurrTime());
console.log(sum2strings(str1, str2));
console.log(sum2strings);


// anonimus fumction
(function (){
    console.log("!!!!!");
})();

