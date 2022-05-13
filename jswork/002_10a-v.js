//a
let a = random(),
b = random(), 
c = random();
let newArray = [a,b,c];

function random() {
  return Math.round(Math.random() * 8 + 1);
}

console.log(newArray[2]);//a

console.log(a + b + c);//v