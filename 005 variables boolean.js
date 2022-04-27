// true false
// == -- равно  5 == 3 + 2
// !=, <> -- не равно: 5 != 6 
// && -- and    true && true = true; false && true = false; false && false = false
// || -- or     true || true = true; false || true = true; false || false = false
// ! -- not     !true = false; !false = true

// == -- равно
0 == ""
0 == undefined
0 == null
0 == false
0 != "false"

// === -- тождественно
// !== -- не тождественно
0 === ""    // !
0 !== "0"


let s = 10;         // number
let n = "Str";      // String
    n = 17;
console.log(s + n); // 10Str

let z = "50";
let x = 30;
console.log(z + x); // 5030
console.log(+z + +x); // 80
console.log(z + "" + x); // 80

a = 10;
