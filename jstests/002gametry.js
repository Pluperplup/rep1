"use strict";

let p1 = Math.round(Math.random() * 5 + 1);
let p2 = Math.round(Math.random() * 5 + 1);
let op = p1 - p2;
let res;
switch (op) {
  case 1:
    res = "First player earned 1 point";
    break;
  case -1:
    res = "Second player earned 1 point";
    break;
  case 2:
    res = "First player earned 2 point";
    break;
  case 3:
    res = "First player earned 3 point";
    break;
  case 4:
    res = "First player earned 4 point";
    break;
  case 5:
    res = "First player earned 5 point";
    break;
  case -2:
    res = "Second player earned 2 point";
    break;
  case -3:
    res = "Second player earned 3 point";
    break;
  case -4:
    res = "Second player earned 4 point";
    break;
  case -5:
    res = "Second player earned 5 point";
    break;
  default:
    res = "Draw";
}
console.log(res);

/*if (p1 - p2 == 1) {
   console.log("First player earned 1 point");
} else if (p1 - p2 == -1) {
    console.log("Second player earned 1 point");
} else if (p1 - p2 == 2) {
    console.log("First player earned 2 point");
} else if (p1 - p2 == -2) {
    console.log("Second player earned 2 point");
} else if (p1 - p2 == 3) {
    console.log("First player earned 3 point");
} else if (p1 - p2 == -3) {
    console.log("Second player earned 3 point");
} else if (p1 - p2 == 4) {
    console.log("First player earned 4 point");
} else if (p1 - p2 == -4) {
    console.log("Second player earned 4 point");
} else if (p1 - p2 == 5) {
    console.log("First player earned 5 point");
} else if (p1 - p2 == -5) {
    console.log("Second player earned 5 point");
} else {
    console.log("Draw");
}*/

/*if (p1 - p2 == 1) {
    alert("First player earned 1 point");
 } else if (p1 - p2 == -1) {
     alert("Second player earned 1 point");
 } else if (p1 - p2 == 2) {
     alert("First player earned 2 point");
 } else if (p1 - p2 == -2) {
     alert("Second player earned 2 point");
 } else if (p1 - p2 == 3) {
    alert("First player earned 3 point");
 } else if (p1 - p2 == -3) {
    alert("Second player earned 3 point");
 } else if (p1 - p2 == 4) {
    alert("First player earned 4 point");
 } else if (p1 - p2 == -4) {
    alert("Second player earned 4 point");
 } else if (p1 - p2 == 5) {
    alert("First player earned 5 point");
 } else if (p1 - p2 == -5) {
    alert("Second player earned 5 point");
 } else {
    alert("Draw");
 }*/
