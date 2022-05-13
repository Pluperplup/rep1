
// bit
// 0 or 1
// 100011101 8 bit = 1 byte  0...255 2 byte -- 0...65535
// 1011 = 1 * 2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 8 + 0 + 2 + 1 
// 16 = 0..9abcdef // 
// 2 * 10^2 + 1 * 10^1 + 1 * 10^0

// !"#$&(-09<F


let count = 22; 
let s1 = "Количество пользователей равно \"" + count + "\" человек ";
let s2 = '';
let s3 = `Количество пользователей равно ${count} человек`;

// Lenght
// console.log(`Lenght of variable s1 is ${s1.length}`);

// charAt
// for(let count = 0; count < s1.length; count++) {
//     console.log(s1.charAt(count));
// }

// console.log(s1.includes("вател"));

// indexOf & substring
// let sub = s1.substring(s1.indexOf("польз"), s1.indexOf("равно") + 5);
// sub = sub.toUpperCase();
// console.log(sub);

// split
// let words = s1.trim().split(" ");
// console.log(words);
// words = words.filter((item) => item.length > 8);
// console.log(words);
// sNew = words.join(" ");
// console.log(sNew);
// console.log(s1.split(""));

// let pass = "Erf*(_4321fffdasfdsa";
// let regEx = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
// console.log(pass.match(regEx));