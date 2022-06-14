let elephant = [2, 3];

let target = [3, 4];

function MoveElephant(x, y) {
  let expression =
    (x % 2 == 1 && y % 2 == 0) || (x % 2 == 0 && y % 2 == 1) ? true : false;

  if (expression) {
    return  (elephant[0] = x), (elephant[1] = y);
    }
   return console.log("try again");
  
}


  
console.log(`old location (${elephant[0]} , ${elephant[1]})`);

MoveElephant(3,4);

console.log(`new location (${elephant[0]} , ${elephant[1]})`);


if (elephant[0] == target[0] && elephant[1] == target[1]){
    console.log("You win!");
} 
else {
    console.log("You didn't win yet!");
}