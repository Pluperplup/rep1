// for (let c = prompt("Enter your name"); !c; c = prompt("Enter your name") ){
//     alert(`Your name is ${c}`);
// }

let c;
while (true) {
    c = prompt("Enter your name:");
    if(!c) {
        alert("Bye!");
        break;
    } 
    alert(`Your name is ${c}`);
}

// let c1 = [];
// c[0] = 1;
// c[100] = 18;
// console.log(c.length);

// for(let i in c1) {
//     console.log(i);
//     console.log(c1[100], c1[0]);
// }

// let obj = {
//     name: "MyName",
//     age: 17
// }

// for(let val in obj) {
//     console.log(val);
// }